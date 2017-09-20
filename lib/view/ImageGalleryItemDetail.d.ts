import { AbstractComponent } from "./AbstractComponent";
import * as Lotus from "lotusjs-components/lib";
export declare type asset = {
    objectName: string;
    createdDate: Date;
    url: string;
};
export declare class ImageGalleryItemDetail extends AbstractComponent {
    private _asset;
    private _nameLabel;
    private _dateCreatedLabel;
    private _urlLabel;
    constructor();
    asset: asset;
    nameLabel: HTMLElement;
    dateCreatedLabel: HTMLElement;
    urlLabel: HTMLElement;
    protected render(): void;
    defineSkinParts(): void;
    created(element: Lotus.LotusHTMLElement): void;
    destroy(): void;
}
