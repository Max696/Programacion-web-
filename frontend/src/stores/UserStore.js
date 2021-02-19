import{extendObservable, extendsObservable} from 'mobx';

class UserStore{

    constructor(){
        extendObservable(this, {
            loading: true,
            isLoggedIn: false,
            usermae: ''
        })
    }
}

export default new UserStore();