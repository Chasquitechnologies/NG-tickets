import { FormControl } from '@angular/forms';

export function newTicketDropdownValidator(c: FormControl) {

    let validated = c.value.id > 0 ? true : null
    return validated ? null : {
        newTicketDropdownValidator: {
            valid: false
        }
    };
}