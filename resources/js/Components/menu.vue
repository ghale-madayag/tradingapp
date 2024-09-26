<script>
import { Link, router } from '@inertiajs/vue3';
import { layoutComputed } from "@/state/helpers";
import simplebar from "simplebar-vue";

export default {
  components: {
    simplebar,
    Link
  },
  data() {
    return {
      settings: {
        minScrollbarLength: 60,
      },
    };
  },
  computed: {
    ...layoutComputed,
    layoutType: {
      get() {
        return this.$store ? this.$store.state.layout.layoutType : {} || {};
      },
    },
  },
  mounted() {
    this.initActiveMenu();
    this.onRoutechange();
    if (document.querySelectorAll(".navbar-nav .collapse")) {
      let collapses = document.querySelectorAll(".navbar-nav .collapse");

      collapses.forEach((collapse) => {
        // Hide sibling collapses on `show.bs.collapse`
        collapse.addEventListener("show.bs.collapse", (e) => {
          e.stopPropagation();
          let closestCollapse = collapse.parentElement.closest(".collapse");
          if (closestCollapse) {
            let siblingCollapses =
              closestCollapse.querySelectorAll(".collapse");
            siblingCollapses.forEach((siblingCollapse) => {
              if (siblingCollapse.classList.contains("show")) {
                siblingCollapse.classList.remove("show");
                siblingCollapse.parentElement.firstChild.setAttribute("aria-expanded", "false");
              }
            });
          } else {
            let getSiblings = (elem) => {
              // Setup siblings array and get the first sibling
              let siblings = [];
              let sibling = elem.parentNode.firstChild;
              // Loop through each sibling and push to the array
              while (sibling) {
                if (sibling.nodeType === 1 && sibling !== elem) {
                  siblings.push(sibling);
                }
                sibling = sibling.nextSibling;
              }
              return siblings;
            };
            let siblings = getSiblings(collapse.parentElement);
            siblings.forEach((item) => {
              if (item.childNodes.length > 2) {
                item.firstElementChild.setAttribute("aria-expanded", "false");
                item.firstElementChild.classList.remove("active");
              }
              let ids = item.querySelectorAll("*[id]");
              ids.forEach((item1) => {
                item1.classList.remove("show");
                item1.parentElement.firstChild.setAttribute("aria-expanded", "false");
                item1.parentElement.firstChild.classList.remove("active");
                if (item1.childNodes.length > 2) {
                  let val = item1.querySelectorAll("ul li a");

                  val.forEach((subitem) => {
                    if (subitem.hasAttribute("aria-expanded"))
                      subitem.setAttribute("aria-expanded", "false");
                  });
                }
              });
            });
          }
        });

        // Hide nested collapses on `hide.bs.collapse`
        collapse.addEventListener("hide.bs.collapse", (e) => {
          e.stopPropagation();
          let childCollapses = collapse.querySelectorAll(".collapse");
          childCollapses.forEach((childCollapse) => {
            let childCollapseInstance = childCollapse;
            childCollapseInstance.classList.remove("show");
            childCollapseInstance.parentElement.firstChild.setAttribute("aria-expanded", "false");
          });
        });
      });
    }
  },

  methods: {
    onRoutechange() {
      // this.initActiveMenu();
      setTimeout(() => {
        var currentPath = window.location.pathname;
        if (document.querySelector("#navbar-nav")) {
          let currentPosition = document.querySelector("#navbar-nav").querySelector('[href="' + currentPath + '"]')?.offsetTop;
          if (currentPosition > document.documentElement.clientHeight) {
            document.querySelector("#scrollbar .simplebar-content-wrapper") ? document.querySelector("#scrollbar .simplebar-content-wrapper").scrollTop = currentPosition + 300 : '';
          }
        }
      }, 500);
    },

    initActiveMenu() {
      setTimeout(() => {
        var currentPath = window.location.pathname;
        if (document.querySelector("#navbar-nav")) {
          let a = document.querySelector("#navbar-nav").querySelector('[href="' + currentPath + '"]');
          if (a) {
            a.classList.add("active");
            let parentCollapseDiv = a.closest(".collapse.menu-dropdown");
            if (parentCollapseDiv) {
              parentCollapseDiv.classList.add("show");
              parentCollapseDiv.parentElement.children[0].classList.add("active");
              parentCollapseDiv.parentElement.children[0].setAttribute("aria-expanded", "true");
              if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown")) {
                parentCollapseDiv.parentElement.closest(".collapse").classList.add("show");
                if (parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling)
                  parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.classList.add("active");
                const grandparent = parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.parentElement.closest(".collapse");
                if (grandparent && grandparent && grandparent.previousElementSibling) {
                  grandparent.previousElementSibling.classList.add("active");
                  grandparent.classList.add("show");
                }
              }
            }
          }
        }
      }, 0);
    },
  },
};
</script>

<template>
  <BContainer fluid>
    <div id="two-column-menu"></div>

    <template v-if="layoutType === 'vertical' || layoutType === 'semibox'">
      <ul class="navbar-nav h-100" id="navbar-nav">
        <li class="menu-title">
          <span data-key="t-menu"> {{ $t("t-menu") }}</span>
        </li>
        <li class="nav-item">
          <a class="nav-link menu-link" href="#sidebarDashboards" data-bs-toggle="collapse" role="button"
            aria-expanded="false" aria-controls="sidebarDashboards">
            <i class="ri-dashboard-2-line"></i>
            <span data-key="t-dashboards"> {{ $t("t-dashboards") }}</span>
          </a>
          <div class="collapse menu-dropdown" id="sidebarDashboards">
            <ul class="nav nav-sm flex-column">
              <li class="nav-item">
                <Link href="/" class="nav-link" data-key="t-ecommerce">
                {{ $t("t-ecommerce") }}
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <!-- end Dashboard Menu -->

        <li class="menu-title">
          <i class="ri-more-fill"></i>
          <span data-key="t-pages">{{ $t("t-pages") }}</span>
        </li>

        <li class="nav-item">
          <a class="nav-link menu-link" href="#sidebarAuth" data-bs-toggle="collapse" role="button" aria-expanded="false"
            aria-controls="sidebarAuth">
            <i class="ri-account-circle-line"></i>
            <span data-key="t-authentication">{{
              $t("t-authentication")
            }}</span>
          </a>
          <div class="collapse menu-dropdown" id="sidebarAuth">
            <ul class="nav nav-sm flex-column">
              <li class="nav-item">
                <a class="nav-link" href="#sidebarSignIn" data-bs-toggle="collapse" role="button" aria-expanded="false"
                  aria-controls="sidebarSignIn" data-key="t-signin">{{ $t("t-signin") }}
                </a>
                <div class="collapse menu-dropdown" id="sidebarSignIn">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <Link href="/auth/signin-basic" class="nav-link" data-key="t-basic">{{ $t("t-basic") }}
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link href="/auth/signin-cover" class="nav-link" data-key="t-cover">{{ $t("t-cover") }}
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#sidebarSignUp" data-bs-toggle="collapse" role="button" aria-expanded="false"
                  aria-controls="sidebarSignUp" data-key="t-signup">{{ $t("t-signup") }}
                </a>
                <div class="collapse menu-dropdown" id="sidebarSignUp">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <Link href="/auth/signup-basic" class="nav-link" data-key="t-basic">{{ $t("t-basic") }}
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link href="/auth/signup-cover" class="nav-link" data-key="t-cover">{{ $t("t-cover") }}
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#sidebarResetPass" data-bs-toggle="collapse" role="button" aria-expanded="false"
                  aria-controls="sidebarResetPass" data-key="t-password-reset">
                  {{ $t("t-password-reset") }}
                </a>
                <div class="collapse menu-dropdown" id="sidebarResetPass">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <Link href="/auth/reset-pwd-basic" class="nav-link" data-key="t-basic">
                      {{ $t("t-basic") }}
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link href="/auth/reset-pwd-cover" class="nav-link" data-key="t-cover">
                      {{ $t("t-cover") }}
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#sidebarcreatepassword" data-bs-toggle="collapse" role="button"
                  aria-expanded="false" aria-controls="sidebarcreatepassword" data-key="t-lock-screen">
                  {{ $t("t-password-create") }}
                </a>
                <div class="collapse menu-dropdown" id="sidebarcreatepassword">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <Link href="/auth/create-pwd-basic" class="nav-link" data-key="t-basic">
                      {{ $t("t-basic") }}
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link href="/auth/create-pwd-cover" class="nav-link" data-key="t-cover">
                      {{ $t("t-cover") }}
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#sidebarLockScreen" data-bs-toggle="collapse" role="button"
                  aria-expanded="false" aria-controls="sidebarLockScreen" data-key="t-lock-screen">
                  {{ $t("t-lock-screen") }}
                </a>
                <div class="collapse menu-dropdown" id="sidebarLockScreen">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <Link href="/auth/lockscreen-basic" class="nav-link" data-key="t-basic">
                      {{ $t("t-basic") }}
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link href="/auth/lockscreen-cover" class="nav-link" data-key="t-cover">
                      {{ $t("t-cover") }}
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#sidebarLogout" data-bs-toggle="collapse" role="button" aria-expanded="false"
                  aria-controls="sidebarLogout" data-key="t-logout">
                  {{ $t("t-logout") }}
                </a>
                <div class="collapse menu-dropdown" id="sidebarLogout">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <Link href="/auth/logout-basic" class="nav-link" data-key="t-basic">
                      {{ $t("t-basic") }}
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link href="/auth/logout-cover" class="nav-link" data-key="t-cover">
                      {{ $t("t-cover") }}
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#sidebarSuccessMsg" data-bs-toggle="collapse" role="button"
                  aria-expanded="false" aria-controls="sidebarSuccessMsg" data-key="t-success-message">
                  {{ $t("t-success-message") }}
                </a>
                <div class="collapse menu-dropdown" id="sidebarSuccessMsg">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <Link href="/auth/success-msg-basic" class="nav-link" data-key="t-basic">
                      {{ $t("t-basic") }}
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link href="/auth/success-msg-cover" class="nav-link" data-key="t-cover">
                      {{ $t("t-cover") }}
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#sidebarTwoStep" data-bs-toggle="collapse" role="button" aria-expanded="false"
                  aria-controls="sidebarTwoStep" data-key="t-two-step-verification">
                  {{ $t("t-two-step-verification") }}
                </a>
                <div class="collapse menu-dropdown" id="sidebarTwoStep">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <Link href="/auth/twostep-basic" class="nav-link" data-key="t-basic">
                      {{ $t("t-basic") }}
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link href="/auth/twostep-cover" class="nav-link" data-key="t-cover">
                      {{ $t("t-cover") }}
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#sidebarErrors" data-bs-toggle="collapse" role="button" aria-expanded="false"
                  aria-controls="sidebarErrors" data-key="t-errors">
                  {{ $t("t-errors") }}
                </a>
                <div class="collapse menu-dropdown" id="sidebarErrors">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <Link href="/auth/404-basic" class="nav-link" data-key="t-404-basic">
                      {{ $t("t-404-basic") }}
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link href="/auth/404-cover" class="nav-link" data-key="t-404-cover">
                      {{ $t("t-404-cover") }}
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link href="/auth/404" class="nav-link" data-key="t-404-alt">
                      {{ $t("t-404-alt") }}
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link href="/auth/500" class="nav-link" data-key="t-500">
                      {{ $t("t-500") }}
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link href="/auth/ofline" class="nav-link" data-key="t-offline-page">
                      {{ $t("t-offline-page") }}
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>

        <li class="nav-item">
          <a class="nav-link menu-link" href="#sidebarPages" data-bs-toggle="collapse" role="button" aria-expanded="false"
            aria-controls="sidebarPages">
            <i class="ri-pages-line"></i>
            <span data-key="t-pages">{{ $t("t-pages") }}</span>
          </a>
          <div class="collapse menu-dropdown" id="sidebarPages">
            <ul class="nav nav-sm flex-column">
              <li class="nav-item">
                <Link href="/pages/starter" class="nav-link" data-key="t-starter">{{ $t("t-starter") }}
                </Link>
              </li>
              <li class="nav-item">
                <Link href="/pages/maintenance" class="nav-link" data-key="t-maintenance">
                {{ $t("t-maintenance") }}
                </Link>
              </li>
              <li class="nav-item">
                <Link href="/pages/coming-soon" class="nav-link" data-key="t-coming-soon">
                {{ $t("t-coming-soon") }}
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li class="menu-title">
          <i class="ri-more-fill"></i>
          <span data-key="t-components">{{ $t("t-components") }}</span>
        </li>
        <li class="nav-item">
          <a class="nav-link menu-link" href="#sidebarMultilevel" data-bs-toggle="collapse" role="button"
            aria-expanded="false" aria-controls="sidebarMultilevel">
            <i class="ri-share-line"></i>
            <span data-key="t-multi-level">{{ $t("t-multi-level") }}</span>
          </a>
          <div class="collapse menu-dropdown" id="sidebarMultilevel">
            <ul class="nav nav-sm flex-column">
              <li class="nav-item">
                <a class="nav-link" data-key="t-level-1.1">
                  {{ $t("t-level-1.1") }}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#sidebarAccount" data-bs-toggle="collapse" role="button" aria-expanded="false"
                aria-controls="sidebarAccount" data-key="t-level-1.2">
                {{ $t("t-level-1.2") }}
              </a>
              <div class="collapse menu-dropdown" id="sidebarAccount">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <a class="nav-link" data-key="t-level-2.1">
                      {{ $t("t-level-2.1") }}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#sidebarlevel" data-bs-toggle="collapse" role="button"
                      aria-expanded="false" aria-controls="sidebarlevel" data-key="t-level-2.2">
                      {{ $t("t-level-2.2") }}
                    </a>
                    <div class="collapse menu-dropdown" id="sidebarlevel">
                      <ul class="nav nav-sm flex-column">
                        <li class="nav-item">
                          <a class="nav-link" data-key="t-level-3.1">
                            {{ $t("t-level-3.1") }}
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" data-key="t-level-3.2">
                            {{ $t("t-level-3.2") }}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </template>
</BContainer></template>