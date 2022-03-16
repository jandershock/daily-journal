import * as JournalEntryList from "./JournalEntryList.js";
import * as DataManager from "./data/DataManager.js";
import { Footer } from "./footer/Footer.js";


const ShowFooter = () => {
    const footerEl = document.querySelector("footer");
    footerEl.innerHTML = Footer();
}

const SearchEntriesForString = () => {
    let searchString = document.querySelector("#entrySearch").value;
    console.log(searchString);
    DataManager.getEntries()
    .then(data => {
        // Filter all entry objects based on searchString and create new list in the Dom with EntryListComponent
        JournalEntryList.EntryListComponent(
            data.filter(entryObj => entryObj.entry.includes(searchString))
        )
    })
}

const StartApp = () => {
    DataManager.getEntries().then( data => {
        JournalEntryList.EntryListComponent(data);
        
        const sectionArray = document.querySelectorAll("#entryLog section")
        sectionArray.forEach((element) => {
            console.log(element);
            element.addEventListener("click", (event) => {
                console.log("Clicked on entry with id of", event.target.id.split('--')[1])
            })
        })
    })

    document.querySelector("#entrySearchSubmitButton").addEventListener("click", SearchEntriesForString)

    ShowFooter();
}

StartApp();