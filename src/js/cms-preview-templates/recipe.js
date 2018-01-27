import React from "react";
import format from "date-fns/format";

export default class PostPreview extends React.Component {
    render() {
        const {entry, getAsset, widgetFor} = this.props;
        let image = getAsset(entry.getIn(["data", "image"]));

        // Bit of a nasty hack to make relative paths work as expected as a background image here
        if (image && !image.fileObj) {
            image = window.parent.location.protocol + "//" + window.parent.location.host + image;
        }

        return <div class="rdkv2">
            <link rel="stylesheet" href="/rewe-de.css"/>
            <div class="rdk-header recipe-detail-header has-gradient">
                <img class="picture cover hidden-print" src={getAsset(entry.getIn(["data", "image"]))}/>

                <div class="rdk-logo-wrapper visible-print-block">
                    <img class="rdk-logo"
                         src="/docroot/_release/_pages/master/assets/img/r-e-w-e-deine-kueche-kochtopf-print.svg"
                         alt=""/>
                </div>

                <div class="recipe-title-container">
                    <div class="container">
                        <div class="row">
                            <div class=" col-xs-12 col-sm-10 col-lg-5 col-print-10">
                                <h1 class="h1 font-style-display-04 font-style-bright headline margin-bottom-"
                                    id="jcr-4a8b98f6-94ff-426c-8230-fb23052245ad">
                                    {entry.getIn(["data", "title"])}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="breadcrumb-container hidden-print">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-9 visible-md-block visible-lg-block">

                                <section class="breadcrumb all-white ">
                                    <a class="breadcrumb-link" href="/">REWE.de</a>
                                    <a class="breadcrumb-link" href="/rezepte/">Rezepte</a>
                                    <span class="breadcrumb-link active">Cannelloni mit Hackfleisch</span>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="recipe-info">
                <div class="container">
                    <div class="row">
                        <div
                            class="col-xs-12 col-md-6 col-lg-7 item-wrapper d-flex justify-content-between flex-nowrap align-items-center recipe-info-summary">
                            <div class="info-item info-item-time d-flex flex-column flex-wrap text-left">
                                <div class="font-style-body-2 font-weight-bold info-item-label w-100-p">Gesamt: 65 min
                                </div>
                                <div class="font-style-body info-item-label w-100-p">Zubereitung: 40 min</div>
                            </div>

                            <div class="info-item d-flex hidden-print">
                                <span class="font-style-body info-item-label">Einfach</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="recipe-details-v2 ">
                <div class="container ">
                    <div class="row recipe-row">
                        <div class="col-xs-12 col-md-6  col-lg-7 col-print-8 step-container ">
                            <div class="read-mode-header">
                                <div class="reader-btn left">
                                    <a href="#" data-read-close="#recipe">
                                        <p>Zurück <span class="hidden-xs hidden-sm">zum Rezept</span></p>
                                    </a>
                                </div>
                                <div class="reader-btn right">
                                    <a href="#" data-read-close="#recipe">
                                        <span class="hidden-xs hidden-sm">Vollbildansicht schließen </span>
                                    </a>
                                </div>
                                <div class="titel">
                                    <h2 class="h2 font-style-subhead-2 margin-bottom-0"
                                        id="jcr-4a8b98f6-94ff-426c-8230-fb23052245ad">
                                        Cannelloni mit Hackfleisch
                                    </h2>
                                </div>
                            </div>

                            <div
                                class="visible-md-block visible-lg-block controller read-mode-layer print-force-visible"
                                data-read-mode-container="#recipe" data-recipe-title="Cannelloni mit Hackfleisch"
                                data-recipe-amount="4" data-controller="master/modules/ReadMode">


                                <div class="recipe-steps read-mode-show">


                                    <h2 class="h2 hidden-xs hidden-sm font-style-headline read-mode-hidden"
                                        id="jcr-4a8b98f6-94ff-426c-8230-fb23052245ad">
                                        Zubereitung

                                        <div class="pull-right hidden-print">
                                            <div class="print-button controller"
                                                 data-controller="master/fragments/RecipePrintButton"
                                                 data-recipe-title="Cannelloni mit Hackfleisch" data-recipe-amount="4">
                                                <div class="print-label ">
                                                    <span class="font-style-body "><span
                                                        class="hidden-md">Rezept </span>ausdrucken</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="pull-right hidden-print">

            <span class="controller hidden-xs hidden-sm favor-wrapper" data-controller="master/modules/RecipeCard"
                  data-uuid="0e66ce1f-06d3-450c-aa06-e7ba201089ec" data-recipe-title="Cannelloni mit Hackfleisch"
                  data-recipe-amount="4" data-recipe-update-amount="true" data-confirm-favor="false">
                <span class="rdk-recipe-favor text-variant">

    <div data-favor="">
        <span class="favored-text font-style-body "><span class="hidden-md">Rezept </span>gespeichert</span>
        <span class="unfavored-text font-style-body "><span class="hidden-md">Rezept </span>speichern</span>
    </div>

    <div class="arrow-box position-down ">
        In <a href="https://www.rewe.de/meine-rezepte/" data-favorites-link="">Meine Rezepte</a> gespeichert
    </div>
</span>
            </span>
                                        </div>
                                    </h2>
                                    <hr class="hidden-xs hidden-sm read-mode-hidden"/>
                                    <ol class="recipe-preparation">
                                        <div class="text font-style-body">
                                            <p>Hallo</p>
                                        </div>
                                        {(entry.getIn(["data", "steps"]) || []).map((step, index) => <li
                                            class="recipe-step avoid-pbi">
                                            <div class="text font-style-body">
                                                <p>{step.get("description")}</p>
                                            </div>
                                        </li>)}
                                    </ol>
                                </div>
                                <div class="expert-tipp read-mode-show hidden-print controller "
                                     data-controller="master/modules/ExpertTooltip">
                                    <div class="row">
                                        <div class="expert col-xs-12 col-sm-3 col-print-3">
                                            <div class="image">
                                                <img src="/img/recipe/ernaehrungsexpertin_120x120.jpeg"
                                                     alt="Sophie"/>
                                            </div>
                                            <span class="expert-name font-style-body">Sophie</span>
                                        </div>
                                        <q class="quote col-xs-12 col-sm-8 col-print-8 font-style-body-2">
                                            <p>Auf Nummer sicher gehen Sie, wenn Sie den Auflauf zunächst 15-20 Minuten
                                                mit
                                                Alufolie in den Backofen stellen und ihn erst am Ende offen braun werden
                                                lassen.</p>
                                        </q>
                                    </div>
                                </div>
                                <div class="read-mode-show greetings font-style-body-2">
                                    <p class="text">Viel Spaß beim Nachkochen!</p>
                                </div>
                            </div>
                        </div>
                        <div
                            class="col-xs-12 col-md-5 col-md-offset-1 col-lg-4  col-print-4  col-print-offset-0 print-force-visible">
                            <div class="recipe-ingridients controller"
                                 data-controller="master/fragments/recipes/Ingredients"
                                 data-recipe-title="Cannelloni mit Hackfleisch">
                                <div class="recipe-ingridient-content" action="//shop.rewe.de/" target="_self">
                                    <div class="portions">
                                        <div class="shop-button-wrapper">
                                            <a href="#" class="btn btn-color hidden-print read-mode-button"
                                               data-read-mode-button="#recipe" data-trigger="">
                                                <span class="label-mobile">Zubereitung</span>
                                                <span class="label-desktop">Kochansicht</span>
                                                <img src="/img/icons/fullscreen.svg"/>
                                            </a>
                                        </div>
                                        <h2 class="h2 visible-print font-style-body-2 print-amount-label"
                                            id="jcr-4a8b98f6-94ff-426c-8230-fb23052245ad">
                                            Zutaten für
                                            <span class="print-amount">4</span>
                                            Portionen
                                        </h2>
                                        {/*<hr class="visible-print"/>*/}

                                        {/*<div class="widget hidden-print">*/}
                                            {/*<a class="btn plus "></a>*/}
                                            {/*<a class="btn minus"></a>*/}
                                            {/*<div class="text font-style-body">*/}
                                                {/*<span class="amount">*/}
                                                  {/*<input type="text" class="font-style-body" name="portions" value="4" maxlength="2"/>*/}
                                                {/*</span>*/}
                                                {/*<input type="hidden" name="recipe_id"*/}
                                                       {/*value="03c3d2c6-1bd7-4f73-8ad7-b6f9b6cb0072"/>*/}
                                                {/*Portionen*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    </div>


                                    <div class="hint font-style-caption margin-vertical-half hidden">
                                        Sie möchten mehr oder weniger Portionen zubereiten? Denken Sie daran, auch die
                                        Mengen in
                                        den Zubereitungschritten anzupassen.
                                    </div>


                                    <ul class="list-unstyled ingridient-list font-style-body">
                                        <li data-unit="g" data-product="Hackfleisch">
                                            <input type="hidden" name="ingredient[id]"
                                                   value="ffe3b731-3a8a-43af-8306-418c07783443"/>
                                            <input type="hidden" class="amount" name="ingredient[amount]" value="750"/>
                                            <div class="form-group rewe-checkbox ">
                                                <label>
                                                    <input type="checkbox" class="no-mouseflow " name="" value=""
                                                           checked=""/>
                                                    <div class="state-indicator"></div>
                                                    <div class="label-text"><span class="amount-text">750</span>
                                                        <span class="unit">g</span>Hackfleisch
                                                    </div>
                                                </label>
                                            </div>
                                        </li>
                                    </ul>

                                    {/*<div class="recipe-whatsapp visible-xs-block margin-bottom-1 hidden-print"*/}
                                         {/*data-title="Cannelloni mit Hackfleisch"*/}
                                         {/*data-link="https://www.rewe.de/rezepte/cannelloni-mit-hackfleisch/"*/}
                                         {/*data-img="/docroot/_release/_pages/master/assets/img/WhatsApp.svg"><a*/}
                                        {/*class="btn btn-block btn-default"*/}
                                        {/*href="whatsapp://send?text=Cannelloni%20mit%20Hackfleisch%0AZutaten%20f%C3%BCr%204%20Personen%0A%0A750%20g%20Hackfleisch%0A2%20EL%20%C3%96l%0AZwiebel%0A2%20Knoblauchzehen%0A600%20g%20passierte%20Tomaten%0ASalz%0APfeffer%0A1%20EL%20Zucker%0A250%20g%20Cannelloni%0A25%20g%20Butter%0A25%20g%20Mehl%0A300%20ml%20Milch%0A70%20g%20Frischk%C3%A4se%0A70%20g%20Parmesan%0Ageriebene%20Muskatnuss%0A0.5%20Bund%20Basilikum%0A%0A%0Ahttps%3A%2F%2Fwww.rewe.de%2Frezepte%2Fcannelloni-mit-hackfleisch%2F">*/}
                                        {/*<img src="/docroot/_release/_pages/master/assets/img/WhatsApp.svg" alt="icon"/>*/}
                                        {/*<span class="label">Zutaten per WhatsApp teilen</span>*/}
                                    {/*</a>*/}
                                    {/*</div>*/}
                                    {/*<div class="shop-button-wrapper">*/}
                                        {/*<a class="btn btn-color hidden-print " href="//shop.rewe.de" target="_blank"*/}
                                           {/*title=""*/}
                                           {/*name="">*/}

                                            {/*<span class="label"></span>*/}

                                            {/*<div class="shop-button " data-rewe-button="" data-user-servings="4"*/}
                                                 {/*data-rewe-button-size="xl"><a*/}
                                                {/*class="rewe-delivery-button rewe-button rewe-button-size-xl"*/}
                                                {/*href="https://shop.rewe.de/api/ingredients/mapper"></a></div>*/}
                                            {/*<script type="text/javascript"*/}
                                                    {/*src="https://shop.rewe.de/ingredients/button.js"*/}
                                                    {/*async=""></script>*/}
                                        {/*</a>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>;
    }
}
