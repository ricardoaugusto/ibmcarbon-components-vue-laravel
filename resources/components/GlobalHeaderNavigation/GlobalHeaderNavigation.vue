<template>
  <cv-header aria-label="Opções de navegação">
    <cv-skip-to-content href="#main-content"
      >Pular para o conteúdo
    </cv-skip-to-content>
    <cv-header-name href="/" prefix="ARES">Medical</cv-header-name>

    <cv-header-nav aria-label="Carbon nav">
      <cv-header-menu-item to="/carbon">
        Dashboard
      </cv-header-menu-item>
      <cv-header-menu-item to="/carbon/datatable">
        DataTable
      </cv-header-menu-item>
      <cv-header-menu-item to="/carbon/components">
        Components
      </cv-header-menu-item>
      <cv-header-menu-item to="/carbon/form">
        Form
      </cv-header-menu-item>
      <cv-header-menu aria-label="Link 4">
        <cv-header-menu-item to="/carbon/grid">
          Grid
        </cv-header-menu-item>
        <cv-header-menu-item to="/carbon/typography">
          Typography
        </cv-header-menu-item>
        <cv-header-menu-item to="/carbon/icons-pictograms">
          Icons & Pictograms
        </cv-header-menu-item>
        <cv-header-menu-item to="/carbon/dashboard">
          Dashboard
        </cv-header-menu-item>
      </cv-header-menu>
    </cv-header-nav>

    <template slot="header-global">
      <cv-header-global-action
        aria-label="Notifications"
        aria-controls="notificationsBoard"
        @click="actionNotifications"
      >
        <Notification20 />
      </cv-header-global-action>
      <cv-header-global-action
        aria-label="User avatar"
        @click="actionUserAvatar"
        aria-controls="userBoard"
      >
        <UserAvatar20 />
      </cv-header-global-action>
      <cv-header-global-action
        aria-label="App switcher"
        aria-controls="switcherBoard"
        @click="actionAppSwitcher"
      >
        <AppSwitcher20 />
      </cv-header-global-action>
    </template>

    <template slot="right-panels">
      <cv-header-panel id="notificationsBoard">
        <h4>No notifications</h4>
      </cv-header-panel>

      <cv-header-panel id="userBoard">
        <h4>User profile</h4>
      </cv-header-panel>

      <cv-header-panel id="switcherBoard">
        <cv-switcher>
          <cv-switcher-item>
            <cv-switcher-item-link href="javascript:void(0)" selected>
              Selected app
            </cv-switcher-item-link>
          </cv-switcher-item>
          <cv-switcher-item>
            <cv-switcher-item-link href="javascript:void(0)">
              Other app
            </cv-switcher-item-link>
          </cv-switcher-item>
          <cv-switcher-item>
            <cv-switcher-item-link href="javascript:void(0)">
              Other app
            </cv-switcher-item-link>
          </cv-switcher-item>
        </cv-switcher>
      </cv-header-panel>
    </template>
  </cv-header>
</template>
<script>
import Notification20 from "@carbon/icons-vue/es/notification/20";
import UserAvatar20 from "@carbon/icons-vue/es/user--avatar/20";
import AppSwitcher20 from "@carbon/icons-vue/es/app-switcher/20";

export default {
  name: "GlobalHeaderNavigation",
  components: { Notification20, UserAvatar20, AppSwitcher20 },
  data: function() {
    return {};
  },
  methods: {
    actionNotifications: () => console.info("actionNotifications"),
    actionUserAvatar: () => console.info("actionUserAvatar"),
    actionAppSwitcher: () => console.info("actionAppSwitcher")
  }
};
</script>
<style lang="scss"></style>
