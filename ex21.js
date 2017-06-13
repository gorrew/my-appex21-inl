const Store = {
    accountNr: '123-456-789',
    balance: 10000,
    transferReceiver: null
};

class BankAccount {
    constructor(state) {
        this.state = state;
    }

    deposit(amount) {
        let action = {
            type: 'DEPOSIT',
            data: {
                newBalance: (this.state.balance + amount),
            }
        };
        return action;
    }

    withdraw(amount) {
        let action = {
            type: 'WITHDRAW',
            data: {
                newBalance: (this.state.balance - amount),
            }
        };
        return action;
    }

    transfer(amount, user) {

        let action = {
            type: 'TRANSFER',
            data: {
                newBalance: (this.state.balance - amount),
                transferReceiver: {
                    user: user,
                    amount: amount
                }
            }
        };
        return action;
    }
}

function reducer(state, action) {
    let modifiedState = Object.assign({}, state);
    switch (action.type) {
        case 'DEPOSIT'  : modifiedState.balance = action.data.newBalance;
            return modifiedState;
        case 'WITHDRAW' : modifiedState.balance = action.data.newBalance;
            return modifiedState;
        case 'TRANSFER' : modifiedState.balance = action.data.newBalance;
                          modifiedState.transferReceiver = action.data.transferReceiver;
            return modifiedState;
    }
}

