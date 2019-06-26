//Import Bootstrap's JavaScript features
import Popper from "popper.js";
window.jQuery = $;
window.$ = $;
//Import Bootstrap
require("bootstrap");

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faBolt, faEye } from "@fortawesome/free-solid-svg-icons";


library.add(faCheck, faBolt, faEye);
dom.watch();