export interface JwtResponseInterfaz {
    infoUsuario: {
        nombre: string,
        email: string,
        imagen: string,
        tipo: string,
        accessToken: string,
        expiresIn: string
    }
}