<template>
    <main id="work">
        <h1 class="lg-heading">
            My
            <span class="text-secondary">Work</span>
        </h1>
        <h2 class="sm-heading">
            Check out some of my projects / projects I have worked on ...
        </h2>
        <div class="projects">
            <div class="item">
                <a href="#!">
                    <img src="../assets/img/projects/mycustomapparel.png" alt="My Custom Apparel">
                </a>
                <a href="https://www.mycustomapparel.co.uk" class="btn-light">
                    <i class="fas fa-eye"></i> MyCustomApparel
                </a>
            </div>
            <div class="item">
                <a href="#!">
                    <img src="../assets/img/projects/cocktail-book.png" alt="Cocktail Book">
                </a>
                <div style="display: flex; justify-content: space-evenly; flex-direction: row">
                  <a href="#" style="width: 50%;">
                      <img src="../assets/img/google-play-badge.png" style="border: 0" />
                  </a>
                  <a href="https://github.com/r00t-us3r/electrovault-gui" style="width: 50%;">
                      <img src="../assets/img/app-store-badge.svg" style="padding: 6px; border: 0" />
                  </a>
                </div>
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
