"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firestore_1 = require("firebase/firestore");
const auth_1 = require("firebase/auth");
const Navbar_1 = __importDefault(require("../../components/Navbar"));
const useDayMode_1 = __importDefault(require("../../utils/useDayMode"));
const useAuth_1 = __importDefault(require("../../utils/useAuth"));
const settings_1 = require("../../constants/settings");
const index_1 = __importDefault(require("../../../index"));
const Settings = async () => {
    const { hasDayMode } = await (0, useDayMode_1.default)();
    const { user: { uid, email, }, } = (0, useAuth_1.default)(true);
    const db = (0, firestore_1.getFirestore)();
    const docRef = (0, firestore_1.doc)(db, 'users', uid);
    const docSnap = await (0, firestore_1.getDoc)(docRef);
    const { name: { first: firstName, last: surname, }, } = docSnap.data();
    const q = (0, firestore_1.query)((0, firestore_1.collection)(db, 'addresses'), (0, firestore_1.where)('uid', '==', uid));
    const addressesTableBody = [];
    await (await (0, firestore_1.getDocs)(q)).forEach((doc) => {
        const { address: { street, number, }, utilities, isConfirmed, } = doc.data();
        const services = Object.keys(utilities)
            .map((service) => {
            const val = service
                .slice(3)
                .split(/(?=[A-Z])/)
                .map((string) => string.toLowerCase())
                .join(' ');
            return val[0].toUpperCase() + val.slice(1);
        })
            .join(',');
        const result = !isConfirmed
            ? (`
                  <div class="spinner-border text-${hasDayMode ? 'dark' : 'light'}" role="status">
                      <span class="visually-hidden">Loading...</span>
                  </div>
                `)
            : '';
        addressesTableBody.push(`
            <tr>
                <td>${street} g. ${number}</td>
                
                <td>${services}</td>
                
                <td>${result}</td>
            </tr>
        `);
    });
    const handleNameUpdate = async () => {
        const firstNameInput = document.getElementById('firstName');
        const surnameInput = document.getElementById('surname');
        const newFirstName = firstNameInput.value;
        const newSurname = surnameInput.value;
        if (!newFirstName && !newSurname) {
            return;
        }
        if (!confirm(settings_1.CONFIRM_NAME_CHANGE_EN)) {
            return false;
        }
        const docRef = (0, firestore_1.doc)(db, 'users', uid);
        await (0, firestore_1.updateDoc)(docRef, {
            'name.first': newFirstName,
            'name.last': newSurname,
        });
    };
    const handleEmailUpdate = () => {
        const email = document.getElementById('email').value;
        const currentPassword = document.getElementById('currentPassword').value;
        if (!email) {
            return;
        }
        if (!confirm(settings_1.CONFIRM_EMAIL_CHANGE_EN)) {
            return false;
        }
        const credential = auth_1.EmailAuthProvider.credential((0, auth_1.getAuth)().currentUser.email, currentPassword);
        (0, auth_1.reauthenticateWithCredential)((0, auth_1.getAuth)().currentUser, credential)
            .then(() => {
            (0, auth_1.updateEmail)((0, auth_1.getAuth)().currentUser, email.value)
                .then(() => (0, auth_1.sendEmailVerification)((0, auth_1.getAuth)().currentUser));
        });
    };
    const handlePasswordUpdate = () => {
        const currentPassword = document.getElementById('currentPassword').value;
        const password = document.getElementById('password').value;
        const passwordRepeat = document.getElementById('passwordRepeat').value;
        if (!(password !== passwordRepeat && password.length > 10 && currentPassword === password)) {
            return;
        }
        if (!confirm(settings_1.CONFIRM_PASSWORD_CHANGE_EN)) {
            return false;
        }
        const credential = auth_1.EmailAuthProvider.credential((0, auth_1.getAuth)().currentUser.email, currentPassword);
        (0, auth_1.reauthenticateWithCredential)((0, auth_1.getAuth)().currentUser, credential)
            .then(() => {
            (0, auth_1.updatePassword)((0, auth_1.getAuth)().currentUser, password);
        });
    };
    const handleAddNewAddress = async () => {
        const newAddressStreet = document.getElementById('newAddressStreet').value;
        const addressNumber = document.getElementById('newAddressNumber').value;
        const hasMaintenanceServices = document.getElementById('hasMaintenanceServices').checked;
        const hasCleaningOfCommonSpace = document.getElementById('hasCleaningOfCommonSpace').checked;
        const hasElectricityOfCommonSpace = document.getElementById('hasElectricityOfCommonSpace').checked;
        const hasHotWaterAndHeatingExpenses = document.getElementById('hasHotWaterAndHeatingExpenses').checked;
        const hasContributionToFundOfRenovation = document.getElementById('hasContributionToFundOfRenovation').checked;
        const hasMaintenanceOfIntercom = document.getElementById('hasMaintenanceOfIntercom').checked;
        const hasHouseholdersAdministrationExpenses = document.getElementById('hasHouseholdersAdministrationExpenses').checked;
        const obj = {
            uid,
            address: {
                country: 'Lithuania',
                city: 'Vilnius',
                isCity: true,
                street: newAddressStreet.toString(),
                number: Number(addressNumber),
            },
            utilities: {
                hasMaintenanceServices: !!hasMaintenanceServices,
                hasCleaningOfCommonSpace: !!hasCleaningOfCommonSpace,
                hasElectricityOfCommonSpace: !!hasElectricityOfCommonSpace,
                hasHotWaterAndHeatingExpenses: !!hasHotWaterAndHeatingExpenses,
                hasContributionToFundOfRenovation: !!hasContributionToFundOfRenovation,
                hasMaintenanceOfIntercom: !!hasMaintenanceOfIntercom,
                hasHouseholdersAdministrationExpenses: !!hasHouseholdersAdministrationExpenses,
            },
            dates: {
                created: new Date(),
            },
            isConfirmed: false,
        };
        await (0, firestore_1.addDoc)((0, firestore_1.collection)(db, 'addresses'), obj);
        new index_1.default(true);
    };
    setTimeout(() => {
        const nameUpdateButton = document.getElementById('nameUpdateButton');
        const emailUpdateButton = document.getElementById('emailUpdateButton');
        const passwordUpdateButton = document.getElementById('passwordUpdateButton');
        const addNewAddressButton = document.getElementById('addNewAddressButton');
        nameUpdateButton.onclick = handleNameUpdate;
        emailUpdateButton.onclick = handleEmailUpdate;
        passwordUpdateButton.onclick = handlePasswordUpdate;
        addNewAddressButton.onclick = handleAddNewAddress;
    }, 100);
    const switches = Object.keys(settings_1.ADDRESS_UTILITIES).map((id) => {
        const value = id
            .slice(3)
            .split(/(?=[A-Z])/)
            .map((string) => string.toLowerCase())
            .join(' ');
        const utility = value[0].toUpperCase() + value.slice(1);
        return (`
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="${id}">
                <label class="form-check-label" for="${id}">${utility}</label>
            </div>
        `);
    }).join('');
    return (`
        ${await (0, Navbar_1.default)()}
        
        <div class="container-fluid ${!hasDayMode ? 'bg-night-mode' : ''}">
            <div class="row">
                <div class="col mt-4">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="firstName" value="${firstName}" placeholder="Name">
                        <label for="firstName">Name</label>
                    </div>
                    
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="surname" value="${surname}" placeholder="Surname" autocomplete="off">
                        <label for="surname">Surname</label>
                    </div>
                    
                    <div>
                        <button class="btn btn-outline-${hasDayMode ? 'secondary' : 'light'}" type="button" id="nameUpdateButton">Update name and surname</button>
                    </div>
                    
                    <div class="form-floating my-3">
                        <input type="email" class="form-control" id="email" value="${email}" placeholder="E-mail" autocomplete="off">
                        <label for="email">E-mail</label>
                    </div>
                    
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="currentPassword" value="" placeholder="Current password (required only for password and email change)" autocomplete="new-password">
                        <label for="currentPassword">Current password (required only for password and email change)</label>
                    </div>
                    
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="password" value="" placeholder="Password" autocomplete="new-password">
                        <label for="password">Password</label>
                    </div>
                    
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="passwordRepeat" value="" placeholder="Repeat password" autocomplete="new-password">
                        <label for="passwordRepeat">Repeat password</label>
                    </div>
                    
                    <div class="d-flex justify-content-between">
                        <button class="btn btn-outline-${hasDayMode ? 'secondary' : 'light'}" type="button" id="emailUpdateButton">Update email</button>
                    
                        <button class="btn btn-outline-${hasDayMode ? 'secondary' : 'light'}" type="button" id="passwordUpdateButton">Update password</button>
                    </div>
                    
                    <table class="table table-hover border-dark my-3">
                        <thead>
                            <tr>
                                <th>Address in Vilnius</th>
                                <th>Utilities</th>
                                <th></th>
                            </tr>
                        </thead>
                    
                        <tbody>
                            ${addressesTableBody.join('')}
                        </tbody>
                    </table>
                    
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="newAddressStreet" placeholder="New address (street)" autocomplete="off">
                        <label for="newAddress">New address (street)</label>
                    </div>
                    
                    <div class="form-floating mb-3">
                        <input type="number" class="form-control" id="newAddressNumber" placeholder="New address (number)" autocomplete="off">
                        <label for="newAddress">New address (number)</label>
                    </div>
                    
                    ${switches}
                    
                    <button type="button" id="addNewAddressButton" class="btn btn-success">Add new address</button>
                </div>
            </div>
        </div>
    `);
};
exports.default = Settings;
