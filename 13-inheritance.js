class Hewan {
    constructor(name, variant) {
        this.name = name;
        this.variant = variant;
    }
    berbunyi(suara) {
        console.log('Hewan ' + this.name + ' bersuara ' + suara);
    }
    berjalan() {
        console.log('Hewan ' + this.name + ' variant ' + this.variant +' berjalan');
    }
}

class Kucing extends Hewan {
    constructor() {
        super('Kucing','rusia');
    }
}

const kucing = new Kucing();
kucing.berbunyi('meow');
kucing.berjalan();