import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

import { auth } from "./config";

//Função assincrona = que o resultado não é obtido de imediato
//Havera espera
export async function cadastrarEmailSenha(email,senha){
    //Indicar para o firebase que queremos cadastrar
    //um novo usuario utilizando email/senha
    //o auth vem sendo chamado como uma ponte para autenticar o email e senha
    //Aguardando o resultado do firebase
    const resultado = await createUserWithEmailAndPassword(auth,email,senha)
    return resultado.user
}

export async function loginGoogle(){
    // Configurar como o logindo do google vai funcionar
    const provider = new GoogleAuthProvider();
    const resultado = await signInWithPopup(auth, provider);
    return resultado.user;
}


export async function loginEmailSenha(email,senha){
    //vai realizar um login com uma conta de email aj existente
    const resultado = await signInWithEmailAndPassword(auth,email,senha)
    return resultado.user
}