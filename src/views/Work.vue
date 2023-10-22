<template>
    <main id="work">
        <h1 class="lg-heading">
            My
            <span class="text-secondary">Work</span>
        </h1>
        <h2 class="sm-heading">
            Check out some of my projects / projects I have worked on ...
        </h2>
        <p style="max-width: 80%; text-align: center; margin:auto;padding: 28px 0;">Whilst there are not many projects listed below, this is actually because several no-longer exist. Over the years I have worked on numerous projects that have allowed me to improve my own skills outside of my normal 9-5 job. It has provided me a playground to learn and understand new technologies. Below are the most recent and still active projects that I have taken a part in.</p>
        <hr style="margin: 10px 0 40px 0;" />
        <div class="projects">
          <div class="item">
            <a href="#!">
              <img src="../assets/img/projects/cocktail-book.png" alt="Cocktail Book">
            </a>
            <div style="display: flex; justify-content: space-evenly; flex-direction: row">
              <a href="https://play.google.com/store/apps/details?id=io.thecocktailbook.app" target="_blank" style="width: 50%;">
                <img src="../assets/img/google-play-badge.png" style="border: 0" />
              </a>
              <a href="https://apps.apple.com/us/app/cocktail-book/id1662266968" target="_blank" style="width: 50%;">
                <img src="../assets/img/app-store-badge.svg" style="padding: 6px; border: 0" />
              </a>
            </div>
            <div>
              <p>Cocktail Book was a small personal challenge for me that I undertook at the end of 2022 whilst learning React Native. I spent several months of 2022 learning React Native and understanding the core principals, after Christmas I undertook the challenge of making a simple but effective application that allowed people to search for an get information on making cocktails.</p>
            </div>
          </div>
          <hr style="margin: 10px 0 40px 0;" />
            <div class="item">
                <a href="#!">
                    <img src="../assets/img/projects/mycustomapparel.png" alt="My Custom Apparel">
                </a>
                <a href="https://www.mycustomapparel.co.uk" class="btn-light">
                    <i class="fas fa-eye"></i> MyCustomApparel
                </a>
            </div>
        </div>
    </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Work',
}
</script>
