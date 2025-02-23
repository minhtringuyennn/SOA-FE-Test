type Messages = {
  head_menu: string[];
  banner_title: string[];
  banner_menu: string[];
  bloc_1: {
    title: string;
    subtitle: string;
    cases: any[];
  };
  bloc_2: {
    title: string;
    cases: any[];
  };
  bloc_2_2: {
    title: string;
    btn_1: any[];
    btn_2: any[];
    btn_3: string;
    btn_4: any[];
    btn_5: string;
    btn_6: string;
  };
  bloc_3: {
    title: string;
    more_info: string;
    cases: any[];
  };
  bloc_4: {
    title: string;
    subtitle: string;
    text_title: string;
    text: string;
    pictos: any[];
  };
  bloc_5: {
    title: string;
    text: string;
    reviews: any[];
    footer: string;
  };
  bloc_6: {
    title: string;
    subtitle: string;
    text: string;
    button: string;
  };
  footer: {
    address: any;
    links: any[];
  };
};

declare interface IntlMessages extends Messages {}
