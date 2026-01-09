cd "C:\projetos\mini-delicias"
git init
git add .
git commit -m "Criação do repositório"
git remote add origin https://github.com/ortizpassos/mini-delicias.git
gh repo create mini-delicias --public --source=. --push --description "Projetos com mini-delicias"
git branch -M main
git push -u origin main