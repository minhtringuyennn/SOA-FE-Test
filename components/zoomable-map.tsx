/* eslint-disable @next/next/no-img-element */
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

type Spot = {
  id: number;
  x: number;
  y: number;
  label: string;
  imgSrc: string;
};

const initialSpots: Spot[] = [
  {
    id: 1,
    x: 0.6,
    y: 0.3,
    label: 'bloc_2.cases.0',
    imgSrc: '/Mountains_vector.svg',
  },
  {
    id: 2,
    x: 0.7,
    y: 0.4,
    label: 'bloc_2.cases.1',
    imgSrc: '/Fishing_vector.svg',
  },
  {
    id: 3,
    x: 0.5,
    y: 0.6,
    label: 'bloc_2.cases.2',
    imgSrc: '/Crosshair_vector.svg',
  },
];

export default function ZoomableMap() {
  const t = useTranslations();
  const [activeSpot, setActiveSpot] = useState<Spot | null>(null);
  const [spots, setSpots] = useState<Spot[]>(initialSpots);
  const transformWrapperRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateSpots = () => {
      if (containerRef.current) {
        const { offsetWidth: containerWidth, offsetHeight: containerHeight } =
          containerRef.current;
        setSpots(
          initialSpots.map((spot) => ({
            ...spot,
            x: spot.x * containerWidth,
            y: spot.y * containerHeight,
          })),
        );
      }
    };

    updateSpots();
    window.addEventListener('resize', updateSpots);
    return () => window.removeEventListener('resize', updateSpots);
  }, []);

  const handleSpotClick = (spot: Spot) => {
    setActiveSpot(spot);
    if (transformWrapperRef.current) {
      const { setTransform } = transformWrapperRef.current;
      const zoomLevel = 2.5;
      const viewportCenterX = window.innerWidth / 2;
      const viewportCenterY = window.innerHeight / 2;
      const centerX = spot.x * zoomLevel - viewportCenterX / zoomLevel;
      const centerY = spot.y * zoomLevel - viewportCenterY / zoomLevel;
      setTransform(-centerX, -centerY, zoomLevel);
    }
  };

  const handleContainerClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!(event.target as HTMLElement).closest('.spot')) {
      setActiveSpot(null);
      if (transformWrapperRef.current) {
        const { resetTransform } = transformWrapperRef.current;
        resetTransform();
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl"
    >
      <TransformWrapper ref={transformWrapperRef}>
        <TransformComponent>
          <div
            className="relative h-full w-full"
            onClick={handleContainerClick}
          >
            <img
              src="images/map.png"
              alt="Map"
              className="h-full w-full rounded-3xl"
            />
            {spots.map((spot) => (
              <div
                key={spot.id}
                className="spot absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform hover:scale-110"
                style={{ top: spot.y, left: spot.x }}
                onClick={() => handleSpotClick(spot)}
              >
                <div className="relative flex h-10 w-10 items-center justify-center">
                  <Image
                    src="/Map_pin.svg"
                    width={32}
                    height={42}
                    alt="pin"
                    className="absolute -translate-y-1"
                  />
                  <div className="relative z-10 flex h-6 w-6 -translate-y-2 items-center justify-center rounded-full bg-white">
                    <Image
                      src={spot.imgSrc}
                      width={16}
                      height={16}
                      alt={spot.label}
                      className="h-4 w-4"
                    />
                  </div>
                </div>
              </div>
            ))}
            {activeSpot && (
              <div
                className="absolute -translate-x-1/2 -translate-y-full rounded-lg bg-white p-3 text-sm shadow-lg"
                style={{ top: activeSpot.y, left: activeSpot.x }}
              >
                {t(activeSpot.label)}
              </div>
            )}
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
