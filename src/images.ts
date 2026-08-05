import ConsolePlus from "@/assets/images/logo-console-plus.svg?url";
import Devlens from "@/assets/images/logo-devlens.svg?url";
import DomSnapshot from "@/assets/images/logo-dom-snapshot.svg?url";
import GridGuides from "@/assets/images/logo-grid-guides.svg?url";
import JsonWizard from "@/assets/images/logo-json-wizard.svg?url";
import LinkChecker from "@/assets/images/logo-link-checker.svg?url";
import MarkupNotes from "@/assets/images/logo-markup-notes.svg?url";
import PalettePicker from "@/assets/images/logo-palette-picker.svg?url";
import SpeedBoost from "@/assets/images/logo-speed-boost.svg?url";
import StyleSpy from "@/assets/images/logo-style-spy.svg?url";
import TabMasterPro from "@/assets/images/logo-tab-master-pro.svg?url";
import ViewportBuddy from "@/assets/images/logo-viewport-buddy.svg?url";

const images = {
    "logo-console-plus.svg": ConsolePlus,
    "logo-devlens.svg": Devlens,
    "logo-dom-snapshot.svg": DomSnapshot,
    "logo-grid-guides.svg": GridGuides,
    "logo-json-wizard.svg": JsonWizard,
    "logo-link-checker.svg": LinkChecker,
    "logo-markup-notes.svg": MarkupNotes,
    "logo-palette-picker.svg": PalettePicker,
    "logo-speed-boost.svg": SpeedBoost,
    "logo-style-spy.svg": StyleSpy,
    "logo-tab-master-pro.svg": TabMasterPro,
    "logo-viewport-buddy.svg": ViewportBuddy
}

export default images;
export type ImageName = keyof typeof images;
