import app from './app';

app.listen(process.env.PORT_SERVER || 3210, () => {
    console.info(`🌍 Wow API Servidor rodando na porta /localhost: ${process.env.PORT_SERVER}`)
});