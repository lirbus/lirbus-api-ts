import Template from './template';

type GradesTable = {
    student: string;
    class: string;
    subject: {
        name: string;
        firstTerm: {
            grades: string[]; // Grades object placeholder
            mean: number;
            final: number;
        };
        secondTerm: {
            grades: string[]; // Grades object placholder
            mean: number;
            final: number;
        };
        yearEnd: {
            mean: string[];
            final: number;
        };
    };
};

export default class Grades extends Template {
    super() {
        this.endpoint = 'przegladaj_oceny/uczen';
    }

    gradesTable(): GradesTable {
        const document = this.request();
        console.log(document.querySelector('div.container-background'));
        // TODO: content the table
        return;
    }
}
