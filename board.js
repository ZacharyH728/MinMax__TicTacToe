class viewBoard {
    constructor(root) {
        this.root = root;
        this.root.innerHTML = `
            <div class="board">
                <div class="square" data-index="0"></div>
                <div class="square" data-index="1"></div>
                <div class="square" data-index="2"></div>
                <div class="square" data-index="3"></div>
                <div class="square" data-index="4"></div>
                <div class="square" data-index="5"></div>
                <div class="square" data-index="6"></div>
                <div class="square" data-index="7"></div>
            </div>`;
    }
}