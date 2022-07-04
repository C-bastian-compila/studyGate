export interface JwtResponseInterfaz {
    infoUsuario: {
        id: number,
        nombre: string,
        email: string, // Este no se ocupa por ahora y probablemente lo quite
        accessToken: string,
        expiresIn: string
    }
}