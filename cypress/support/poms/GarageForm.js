export class GarageForm {
    selectors = {
        addCarButton: () => cy.get('app-garage button[class="btn btn-primary"]'),
        carBrand: () => cy.get('select[id="addCarBrand"]'),
        carModel: () => cy.get('select[id="addCarModel"]'),
        carMileage: () => cy.get('input[id="addCarMileage"]'),
        popupAddButton: () => cy.get('app-add-car-modal button[class="btn btn-primary"]'),
        garageButton: () => cy.get('a[routerlink="garage"]'),
        carInGarage: () => cy.get('div[class="car jumbotron"]'),
        editCarButton: () => cy.get('button[class="car_edit btn btn-edit"]'),
        removeCarButton: () => cy.contains('button', 'Remove car'),
        removeButton: () => cy.get('button[class="btn btn-danger"]')
    };

    checkAndClickAddCarButton() {
        this.selectors.addCarButton().should('be.visible').should('be.enabled').click();
    };

    selectCarBrand(brand) {
        this.selectors.carBrand().select(brand);
    };

    selectCarModel(model) {
        this.selectors.carModel().select(model);
    };

    inputMileage(mileage) {
        this.selectors.carMileage().type(mileage);
    };

    checksAndClickAddButton() {
        this.selectors.popupAddButton().should('be.enabled').should('be.visible').click();
    };

    deleteCarInGarage() {
        this.selectors.garageButton().should('be.visible').click();
        this.selectors.editCarButton().should('be.enabled').click();
        this.selectors.removeCarButton().should('be.enabled').click();
        this.selectors.removeButton().should('be.enabled').click();
        //   }
    }
}