class ProductPurchase_locators {
    get PlistOfAloeMoisturisers() {
        return $$("//p[contains(@class, 'top-space-10')][contains(.,'Aloe') or contains(.,'aloe')] /following-sibling::p");
    };
    get addAloeMoisturiser_btn() {
        return $$("//p[contains(@class, 'top-space-10')][contains(.,'Aloe') or contains(.,'aloe')] /following-sibling::button");
    };
    get PlistOfAlmondMoisturisers() {
        return $$("//p[contains(@class, 'top-space-10')][contains(.,'Almond') or contains(.,'almond')] /following-sibling::p");
    };
    get addAlmondMoisturisers_btn() {
        return $$("//p[contains(@class, 'top-space-10')][contains(.,'Almond') or contains(.,'almond')] /following-sibling::button");
    };
    get ShoppingCart() {
        return $("#cart");
    }


}
module.exports = new ProductPurchase_locators();