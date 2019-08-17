action "Deploy to GitHub Pages" {
  uses = "JamesIves/github-pages-deploy-action@1.1.3"
  env = {
    BUILD_SCRIPT = "npm install && npm run build"
    BRANCH = "master"
    FOLDER = "public"
    BASE_BRANCH = "develop"
    CNAME = "olumide.co"
  }
  secrets = ["ACCESS_TOKEN"]
}
