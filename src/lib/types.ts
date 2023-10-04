export interface Firm {
    firmName: string,
    cui: string,
    regCom: string,
    faddress: string,
    fphone: string,
    fdataInfiintare: Date,
    fcaen: string[]
}

export interface User{
    name: string,
    email: string,
    phone: string,
    address: string,
    CNP: string
    firm: Firm
}