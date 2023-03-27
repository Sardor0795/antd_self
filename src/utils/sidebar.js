import Generic from "../components/Generic";
import Buttons from "../components/Buttons";

import HourImg from "../assets/icons/hour.jpg";
import CheckImg from "../assets/icons/check.png";
import { Progress } from "../components/Progress";
import { Inputs } from "../components/Inputs";
import { Alert } from "../components/Alerts";
import { Badge } from "../components/Badges";
import { Checkbox } from "../components/Checkboxes";
import { Dropdown } from "../components/Dropdowns";
import { Table } from "../components/Table";
import { Tooltip } from "../components/Tooltips";
import { Switch } from "../components/Switchs";
import { Carousel } from "../components/Carousels";

export const sidebar = [
  {
    id: 1,
    title: "Buttons",
    path: "/components/buttons",
    element: <Buttons />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: true,
  },
  {
    id: 2,
    title: "Inputs",
    path: "/components/inputs",
    element: <Inputs />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: true,
  },
  {
    id: 3,
    title: "Dropdown",
    path: "/components/dropdown",
    element: <Dropdown />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: true,
  },
  {
    id: 4,
    title: "Carousel",
    path: "/components/carousel",
    element: <Carousel />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: true,
  },
  {
    id: 5,
    title: "Badge",
    path: "/components/badge",
    element: <Badge />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: true,
  },
  {
    id: 6,
    title: "Tooltip",
    path: "/components/tooltip",
    element: <Tooltip />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: true,
  },
  {
    id: 7,
    title: "Progress",
    path: "/components/progress",
    element: <Progress />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: true,
  },
  {
    id: 8,
    title: "Checkbox",
    path: "/components/checkbox",
    element: <Checkbox />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: true,
  },
  {
    id: 9,
    title: "Switch",
    path: "/components/switch",
    element: <Switch />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: true,
  },
  {
    id: 10,
    title: "Alert",
    path: "/components/alert",
    element: <Alert />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: true,
  },
  {
    id: 11,
    title: "Table",
    path: "/components/table",
    element: <Table />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: true,
  },
  {
    id: 12,
    title: "Menu",
    path: "/components/menu",
    element: <Generic />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: false,
  },
  {
    id: 13,
    title: "Steps",
    path: "/components/steps",
    element: <Generic />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: false,
  },
  {
    id: 14,
    title: "Calendar",
    path: "/components/calendar",
    element: <Generic />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: false,
  },
  {
    id: 15,
    title: "Maps",
    path: "/components/maps",
    element: <Generic />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: false,
  },
  {
    id: 16,
    title: "Charts",
    path: "/components/charts",
    element: <Generic />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: false,
  },

  {
    id: 17,
    title: "Forms",
    path: "/components/forms",
    element: <Generic />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: false,
  },
  {
    id: 18,
    title: "DatePicker",
    path: "/components/datepicker",
    element: <Generic />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: false,
  },

  {
    id: 19,
    title: "Transfer",
    path: "/components/transfer",
    element: <Generic />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: false,
  },
  {
    id: 20,
    title: "Upload",
    path: "/components/upload",
    element: <Generic />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: false,
  },
  {
    id: 21,
    title: "Avatar",
    path: "/components/avatar",
    element: <Generic />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: false,
  },

  {
    id: 22,
    title: "Card",
    path: "/components/card",
    element: <Generic />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: false,
  },

  {
    id: 23,
    title: "Collapse",
    path: "/components/collapse",
    element: <Generic />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: false,
  },
  {
    id: 24,
    title: "Image",
    path: "/components/image",
    element: <Generic />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: false,
  },
  {
    id: 25,
    title: "Pagination",
    path: "/components/pagination",
    element: <Generic />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: false,
  },
  {
    id: 26,
    title: "Popover",
    path: "/components/popover",
    element: <Generic />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: false,
  },

  {
    id: 27,
    title: "Tabs",
    path: "/components/tabs",
    element: <Generic />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: false,
  },

  {
    id: 28,
    title: "Drawer",
    path: "/components/drawer",
    element: <Generic />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: false,
  },
  {
    id: 29,
    title: "Modal",
    path: "/components/modal",
    element: <Generic />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: false,
  },
  {
    id: 30,
    title: "Notification",
    path: "/components/notification",
    element: <Generic />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: false,
  },
  {
    id: 31,
    title: "PopConfirm",
    path: "/components/popconfirm",
    element: <Generic />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: false,
  },

  {
    id: 32,
    title: "Result",
    path: "/components/result",
    element: <Generic />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: false,
  },
  {
    id: 33,
    title: "Spinner",
    path: "/components/spinner",
    element: <Generic />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: false,
  },
];
