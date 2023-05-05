<script lang="ts">
  
  </script>
  <div class="body">
  
      <div class="content">
          <slot />
      </div>
  </div>
  
  <style lang="scss">
      .body {
          padding: 0;
          margin: 0;
          display: flex;
          height: 100vh;
          width: 100vw;
          background-color: var(--onyx);
      }
  
      .content {
          width: 100%;
          height: calc(100% - 4rem);
          padding: 2rem;
      }
  </style>