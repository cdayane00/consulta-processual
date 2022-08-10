Back-end feito em Nodejs.

Foi criado um arquivo data.json com os dados do sistema. Em seguida, foi feita a requisição do tipo GET para que a partir do parâmetro "cnj" fosse retornado todos os dados equivalentes a esse "cnj". 

Com a requisição criada, foi feito o deploy na ferramente Heroku.
Link: https://dashboard.heroku.com/
# Subindo sua aplicação pro Heroku

- Para subir uma aplicação back-end pro Heroku, precisamos configurar primeiro a ferramenta de linha de comando do Heroku na nossa máquina:
    
    ```jsx
    sudo snap install --classic heroku
    ```
    
- Após instalar, feche e abra novamente o terminal e faça login no Heroku com o comando:
    
    ```jsx
    heroku login
    ```
    
- Você será solicitado(a) a digitar alguma tecla para abrir o navegador e em seguida é só clicar em Log In. No final deve aparecer no terminal uma mensagem de sucesso no login
- Em seguida, vá na pasta da sua aplicação pelo terminal e associe essa pasta à sua aplicação criada anteriormente no site do Heroku:
    
    ```jsx
    heroku git:remote -a back-projeto-x
    ```
    
    Troque `back-projeto-x` pelo nome que você usou na sua aplicação no Heroku
    
- Pronto, agora sempre que você quiser fazer deploy da sua aplicação basta rodar:
    
    ```jsx
    git push heroku master
    ```
    
- Ao finalizar o deploy, aparecerá a URL para você acessar sua aplicação. O formato deve ser:
    
    ```jsx
    https://back-projeto-x.herokuapp.com/
    ```
    
- Lembrando que essa é a URL do seu **back-end**. O que significa que o seu front precisa mandar requests agora para esse servidor em vez de localhost. Ou seja, se o seu front precisa de uma rota `/receitas` do back, ele deveria mandar um request para `https://back-projeto-x.herokuapp.com/receitas`
-

Link do deploy: https://consulta-processual.herokuapp.com

# Para rodar o projeto:

- Crie um arquivo chamado ".env" e insira a porta que o sistema irá usar. Porta recomendada: 4000.

- Em seguida digite no terminal:

    ```jsx
    npm start
    ```