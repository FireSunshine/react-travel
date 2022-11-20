import styled from '@emotion/styled';

export const PageContent = styled.div`
  .user-layout-container {
    height: 100vh;
    background-image: url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg') !important;
    background-size: 100% !important;
    background-repeat: no-repeat;
    background-position: center 110px;
  }

  .header {
    background: transparent !important;
  }

  .header .lang {
    float: right;
  }

  .content {
    flex: 1;
    padding: 32px 0;
  }

  .content .top {
    text-align: center;
  }

  .content .top .content-header {
    height: 44px;
    line-height: 44px;
  }

  .content .top .content-header a {
    text-decoration: none;
  }

  .content .top .content-header .logo {
    height: 44px;
    margin-right: 16px;
    vertical-align: top;
    float: none;
  }

  .content .top .content-header .title {
    position: relative;
    top: 2px;
    color: #03a9f4;
    font-weight: 600;
    font-size: 33px;
    font-family: 'IBMPlexSerif-BoldItalic';
  }

  .content .top .desc {
    margin-top: 16px;
    margin-bottom: 40px;
  }
`;
