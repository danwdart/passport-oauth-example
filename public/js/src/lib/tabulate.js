// Let's get the users' profile information.
// For now it's just a table drawing library.

// deliberate cast
import startcase from 'lodash.startcase';

const isNumber = n => Number(n) == n;

export const tabulate = data => ('string' === typeof data) ?    
    data :
    `
        <table class="table">
    ${Object.entries(data).map(
        ([key, value]) => `<tr><th>${isNumber(key)?``:startcase(key)}</th><td>${tabulate(value)}</td></tr>`
    ).join(``)}
        </table>
    `;