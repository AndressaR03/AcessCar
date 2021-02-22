import { dbFirebase, db, dbAuth } from '../back/firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import AsyncStorage from '@react-native-community/async-storage';

const api = {
    loginWithEmailAndPassword: async (email: string, senha: string) => {
        const result = await dbAuth.signInWithEmailAndPassword(email, senha);
        return result;
    },
    pegaUsuario: async (uid: any) => {

        try {
            let result = await db.collection('usuarios').doc(uid).get()

            if (!result.exists) {
                return null
            }
            else {
                return result.data()
            }
        } catch (error) {
            console.log('error' + error)
        }
    },
    uploadImage: async (uri: any) => {
        const response = await fetch(uri)
        const blob = await response.blob()

        const dadosFotos = uri;

        const imageName = dadosFotos.substring(dadosFotos.lastIndexOf('/') + 1)

        var ref = dbFirebase.storage().ref().child('images/' + imageName)

        return ref.put(blob);
    },
    pegaImage: async (path: any) => {
        console.log(path)
        return await dbFirebase.storage().refFromURL("gs://myapp" + path).getDownloadURL().then((url) => {
            return url
        })
    },
    cadastraPassageiro: async (dados: any) => {
        let hasSaved: any = false
        const result = await dbAuth.createUserWithEmailAndPassword(dados.email, dados.senha)
        //await api.uploadImage(dados.avatar)
        //const imageURL = await api.pegaImage(dados.avatar.substring(dados.avatar.lastIndexOf('/') + 1))
        const uid = result.user?.uid
        await db.collection('usuarios').doc(uid).set({
            id: uid,
            nome: dados.nome,
            cpf: dados.cpf,
            email: dados.email,
            telefone: dados.telefone,
            senha: dados.senha,
            grauDeficiencia: dados.grauDeficiencia,
            caoGuia: dados.caoGuia,
            acompanhante: dados.acompanhante,
            bengala: dados.bengala,
            //avatar: dados.avatar ? imageURL : "",
        }).then(function () {
            hasSaved = true
            console.log("Document successfully written!");
            console.log("HAS SAVED: " + hasSaved)
        })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
        return hasSaved
    },
    
    getViagens: (setDados:any) => {
        return db.collection("users").where("tipoUsuario", "==", "Artista")
        .onSnapshot(function(querySnapshot) {
            let arrays: any = []
            querySnapshot.forEach(function(doc) {
                arrays.push(doc.data());
            });
            setDados(arrays)
        });
    },
}

export default api
