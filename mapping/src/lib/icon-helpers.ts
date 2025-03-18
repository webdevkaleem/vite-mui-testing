// [1] All Icons Imports
import Accessibility from "@mui/icons-material/Accessibility";
import AccountBalance from "@mui/icons-material/AccountBalance";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Add from "@mui/icons-material/Add";
import Alarm from "@mui/icons-material/Alarm";
import Android from "@mui/icons-material/Android";
import Apple from "@mui/icons-material/Apple";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";
import AudioTrack from "@mui/icons-material/AudioTrack";
import Backup from "@mui/icons-material/Backup";
import BatteryChargingFull from "@mui/icons-material/BatteryChargingFull";
import Bluetooth from "@mui/icons-material/Bluetooth";
import Book from "@mui/icons-material/Book";
import Bookmark from "@mui/icons-material/Bookmark";
import Brush from "@mui/icons-material/Brush";
import Business from "@mui/icons-material/Business";
import Cake from "@mui/icons-material/Cake";
import Call from "@mui/icons-material/Call";
import Camera from "@mui/icons-material/Camera";
import Cancel from "@mui/icons-material/Cancel";
import Chat from "@mui/icons-material/Chat";
import Check from "@mui/icons-material/Check";
import CheckCircle from "@mui/icons-material/CheckCircle";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import ChromeReaderMode from "@mui/icons-material/ChromeReaderMode";
import Close from "@mui/icons-material/Close";
import Cloud from "@mui/icons-material/Cloud";
import Code from "@mui/icons-material/Code";
import ColorLens from "@mui/icons-material/ColorLens";
import Computer from "@mui/icons-material/Computer";
import Copyright from "@mui/icons-material/Copyright";
import CreditCard from "@mui/icons-material/CreditCard";
import Dashboard from "@mui/icons-material/Dashboard";
import DateRange from "@mui/icons-material/DateRange";
import Delete from "@mui/icons-material/Delete";
import Description from "@mui/icons-material/Description";
import DesktopMac from "@mui/icons-material/DesktopMac";
import DeveloperMode from "@mui/icons-material/DeveloperMode";
import Devices from "@mui/icons-material/Devices";
import DialerSip from "@mui/icons-material/DialerSip";
import Directions from "@mui/icons-material/Directions";
import Dns from "@mui/icons-material/Dns";
import Done from "@mui/icons-material/Done";
import Download from "@mui/icons-material/Download";
import Edit from "@mui/icons-material/Edit";
import Email from "@mui/icons-material/Email";
import Event from "@mui/icons-material/Event";
import ExitToApp from "@mui/icons-material/ExitToApp";
import Explore from "@mui/icons-material/Explore";
import Extension from "@mui/icons-material/Extension";
import Face from "@mui/icons-material/Face";
import Favorite from "@mui/icons-material/Favorite";
import FileDownload from "@mui/icons-material/FileDownload";
import FileUpload from "@mui/icons-material/FileUpload";
import FilterList from "@mui/icons-material/FilterList";
import Fingerprint from "@mui/icons-material/Fingerprint";
import Flag from "@mui/icons-material/Flag";
import Flight from "@mui/icons-material/Flight";
import Folder from "@mui/icons-material/Folder";
import Forum from "@mui/icons-material/Forum";
import Forward from "@mui/icons-material/Forward";
import Games from "@mui/icons-material/Games";
import Gavel from "@mui/icons-material/Gavel";
import GetApp from "@mui/icons-material/GetApp";
import Gif from "@mui/icons-material/Gif";
import Grade from "@mui/icons-material/Grade";
import Group from "@mui/icons-material/Group";
import Help from "@mui/icons-material/Help";
import Highlight from "@mui/icons-material/Highlight";
import History from "@mui/icons-material/History";
import Home from "@mui/icons-material/Home";
import HourglassEmpty from "@mui/icons-material/HourglassEmpty";
import Https from "@mui/icons-material/Https";
import Image from "@mui/icons-material/Image";
import Inbox from "@mui/icons-material/Inbox";
import Info from "@mui/icons-material/Info";
import Input from "@mui/icons-material/Input";
import Keyboard from "@mui/icons-material/Keyboard";
import Label from "@mui/icons-material/Label";
import Language from "@mui/icons-material/Language";
import Launch from "@mui/icons-material/Launch";
import LineStyle from "@mui/icons-material/LineStyle";
import Link from "@mui/icons-material/Link";
import List from "@mui/icons-material/List";
import LocationOn from "@mui/icons-material/LocationOn";
import Lock from "@mui/icons-material/Lock";
import Mail from "@mui/icons-material/Mail";
import Map from "@mui/icons-material/Map";
import Menu from "@mui/icons-material/Menu";
import Mic from "@mui/icons-material/Mic";
import Money from "@mui/icons-material/Money";
import Mood from "@mui/icons-material/Mood";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import MoreVert from "@mui/icons-material/MoreVert";
import Movie from "@mui/icons-material/Movie";
import MusicNote from "@mui/icons-material/MusicNote";

import { SvgIconProps } from "@mui/material";

// [2] Types
export interface IconsMappingType {
  [key: string]: React.ComponentType<SvgIconProps>;
}

export const icons: IconsMappingType = {
  accessibility: Accessibility,
  accountBalance: AccountBalance,
  accountCircle: AccountCircle,
  add: Add,
  alarm: Alarm,
  android: Android,
  apple: Apple,
  arrowBack: ArrowBack,
  arrowForward: ArrowForward,
  audioTrack: AudioTrack,
  backup: Backup,
  batteryChargingFull: BatteryChargingFull,
  bluetooth: Bluetooth,
  book: Book,
  bookmark: Bookmark,
  brush: Brush,
  business: Business,
  cake: Cake,
  call: Call,
  camera: Camera,
  cancel: Cancel,
  chat: Chat,
  check: Check,
  checkCircle: CheckCircle,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chromeReaderMode: ChromeReaderMode,
  close: Close,
  cloud: Cloud,
  code: Code,
  colorLens: ColorLens,
  computer: Computer,
  copyright: Copyright,
  creditCard: CreditCard,
  dashboard: Dashboard,
  dateRange: DateRange,
  delete: Delete,
  description: Description,
  desktopMac: DesktopMac,
  developerMode: DeveloperMode,
  devices: Devices,
  dialerSip: DialerSip,
  directions: Directions,
  dns: Dns,
  done: Done,
  download: Download,
  edit: Edit,
  email: Email,
  event: Event,
  exitToApp: ExitToApp,
  explore: Explore,
  extension: Extension,
  face: Face,
  favorite: Favorite,
  fileDownload: FileDownload,
  fileUpload: FileUpload,
  filterList: FilterList,
  fingerprint: Fingerprint,
  flag: Flag,
  flight: Flight,
  folder: Folder,
  forum: Forum,
  forward: Forward,
  games: Games,
  gavel: Gavel,
  getApp: GetApp,
  gif: Gif,
  grade: Grade,
  group: Group,
  help: Help,
  highlight: Highlight,
  history: History,
  home: Home,
  hourglassEmpty: HourglassEmpty,
  https: Https,
  image: Image,
  inbox: Inbox,
  info: Info,
  input: Input,
  keyboard: Keyboard,
  label: Label,
  language: Language,
  launch: Launch,
  lineStyle: LineStyle,
  link: Link,
  list: List,
  lock: Lock,
  locationOn: LocationOn,
  mail: Mail,
  map: Map,
  menu: Menu,
  mic: Mic,
  money: Money,
  mood: Mood,
  moreHoriz: MoreHoriz,
  moreVert: MoreVert,
  movie: Movie,
  musicNote: MusicNote,
};

export interface IconsType {
  icons:
    | "3dRotation"
    | "accessibility"
    | "accountBalance"
    | "accountCircle"
    | "add"
    | "alarm"
    | "android"
    | "apple"
    | "arrowBack"
    | "arrowForward"
    | "audioTrack"
    | "backup"
    | "batteryChargingFull"
    | "bluetooth"
    | "book"
    | "bookmark"
    | "brush"
    | "business"
    | "cake"
    | "call"
    | "camera"
    | "cancel"
    | "chat"
    | "check"
    | "checkCircle"
    | "chevronLeft"
    | "chevronRight"
    | "chromeReaderMode"
    | "close"
    | "cloud"
    | "code"
    | "colorLens"
    | "computer"
    | "copyright"
    | "creditCard"
    | "dashboard"
    | "dateRange"
    | "delete"
    | "description"
    | "desktopMac"
    | "developerMode"
    | "devices"
    | "dialerSip"
    | "directions"
    | "dns"
    | "done"
    | "download"
    | "edit"
    | "email"
    | "event"
    | "exitToApp"
    | "explore"
    | "extension"
    | "face"
    | "favorite"
    | "fileDownload"
    | "fileUpload"
    | "filterList"
    | "fingerprint"
    | "flag"
    | "flight"
    | "folder"
    | "forum"
    | "forward"
    | "games"
    | "gavel"
    | "getApp"
    | "gif"
    | "grade"
    | "group"
    | "help"
    | "highlight"
    | "history"
    | "home"
    | "hourglassEmpty"
    | "https"
    | "image"
    | "inbox"
    | "info"
    | "input"
    | "keyboard"
    | "label"
    | "language"
    | "launch"
    | "lightbulbOutline"
    | "lineStyle"
    | "link"
    | "list"
    | "lock"
    | "locationOn"
    | "mail"
    | "map"
    | "menu"
    | "mic"
    | "money"
    | "mood"
    | "moreHoriz"
    | "moreVert"
    | "movie"
    | "musicNote";
}
