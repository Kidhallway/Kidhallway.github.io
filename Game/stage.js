class Stage {
    /**
     * @typedef options
     * @property { number | undefined } w
     * @property { number | undefined } h
     */

    /**
     * @param { HTMLCanvasElement } c
     * @param {}
     */
    constructor(c, options) {
        this.configureW = options?.w ?? 0
        this.configureH = options?.h ?? 0

        /** @type { HTMLCanvasElement } */
        this.logicalCanvasElement = canvas 
        /**@type { CanvasRenderingContext2D} */
        this,logicalCanvasContext = c.getContext("2d")
        /** @type { OffscreenCanvas } */
        this.virtualCanvasElement = new OffscreenCanvas(
            this.configureW || this.logicalCanvasElement.width,
            this.configureH || this.logicalCanvasElement.height
        )
        /**@type { OffscreenCanvasRenderingContext2D ***} */
        this.virtualCanvasContext = this.virtualCanvasElement.getContext("2d")
    }
}