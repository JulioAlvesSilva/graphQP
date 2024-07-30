import mongoose from "mongoose";

async function conectaNaDatabase() {
    try {
        mongoose.connect("mongodb+srv://apsjuliocs:wUAmvYkRmQLpdfgY@project.yu6gk0x.mongodb.net/projectDados?retryWrites=true&w=majority&appName=project");
        return mongoose.connection;
    } catch (error) {
        console.error("Falha na conexão", error)
    }
};

export default conectaNaDatabase;
