import { FormatDate } from "./helper.js";

/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            ${FormatDate(entry.date)} ${entry.entry}
        </section>
    `
}