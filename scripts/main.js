import * as JournalEntryList from "./JournalEntryList.js";
import * as DataManager from "./data/DataManager.js";
import { Footer } from "./footer/Footer.js";


const ShowFooter = () => {
    const footerEl = document.querySelector("footer");
    footerEl.innerHTML = Footer();
}

const StartApp = () => {
    DataManager.getEntries().then( data => {
        JournalEntryList.EntryListComponent(data);
    })

    ShowFooter();
}

StartApp();