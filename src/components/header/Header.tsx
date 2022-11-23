import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.svg';
import { UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, Input, Layout, Menu, message, Typography } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from '../../redux/hooks';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { addLanguageActionCreator, changeLanguageActionCreator } from '../../redux/language/languageAction';
import jwt_decode, { JwtPayload as DefaultJwtPayload } from 'jwt-decode';
import { userSlice } from '../../redux/user/userSlice';

interface JwtPayload extends DefaultJwtPayload {
  username: string;
}

export const Header = () => {
  const navigate = useNavigate();
  const language = useSelector((state) => state.language.language);
  const langeuageList = useSelector((state) => state.language.languageList);
  const [langeuageArr, setLangeuageArr] = useState<{ label: string; key: string }[]>();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { keywords } = useParams();
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [userName, setUserName] = useState('');
  const token = useSelector((state) => state.userSlice.token);

  useEffect(() => {
    if (token) {
      const jwt_token = jwt_decode<JwtPayload>(token);
      setUserName(jwt_token.username);
    }
  }, [token]);

  // 退出登录
  const onLogout = () => {
    dispatch(userSlice.actions.logOut());
    navigate('/');
    window.location.reload(); // 可加可不加
  };

  useEffect(() => {
    setLangeuageArr([
      ...langeuageList.map((l) => {
        return {
          label: l.name,
          key: l.code
        };
      }),
      { label: '添加新语言', key: 'new' }
    ]);
  }, [langeuageList]);

  const menuClickHandler = (e) => {
    if (e.key.includes('new_lange')) {
      message.info('暂不支持新语言');
      return;
    } else if (e.key === 'new') {
      dispatch(addLanguageActionCreator('新语言', `new_lange_${new Date().getTime()}`));
    } else {
      dispatch(changeLanguageActionCreator(e.key));
    }
  };

  return (
    <div className={styles['app-header']}>
      <Layout.Header className={styles['main-header']}>
        <span onClick={() => navigate('/')} className={styles['go-home']}>
          <img src={logo} alt="" className={styles['App-logo']} />
          <Typography.Title level={2} className={styles.title}>
            {t('header.title')}
          </Typography.Title>
        </span>
        <Input.Search
          placeholder="想去哪"
          enterButton
          className={styles['search-input']}
          value={searchValue ?? keywords}
          onChange={(e) => setSearchValue(e.target.value)}
          onSearch={(keywords) => {
            navigate('/search/' + keywords);
          }}
        />
        <Button.Group className={styles['button-group']}>
          <Button style={{ margin: '0 15px' }} onClick={() => navigate('/shoppingCart')}>
            {t('header.shoppingCart')}
          </Button>
          {token ? (
            <>
              <Button type="link">
                {t('header.welcome')}
                {userName}
              </Button>
              <Button onClick={onLogout} type="link" danger>
                {t('header.signOut')}
              </Button>
            </>
          ) : (
            <>
              <Button icon={<UserOutlined />} style={{ borderRadius: '25px' }} onClick={() => navigate('/signin')}>
                {t('header.signin')}
              </Button>
              <Button style={{ margin: '0 15px' }} type="text" onClick={() => navigate('/register')}>
                {t('header.register')}
              </Button>
            </>
          )}
          <Dropdown.Button overlay={<Menu items={langeuageArr} onClick={menuClickHandler} />} icon={<GlobalOutlined />}>
            {language === 'zh' ? '中文' : 'English'}
          </Dropdown.Button>
        </Button.Group>
      </Layout.Header>
      {/* <Menu mode="horizontal" className={styles["main-menu"]}>
        <Menu.Item key={1}>旅游首页</Menu.Item>
        <Menu.Item key={2}>周末游</Menu.Item>
        <Menu.Item key={3}>跟团游</Menu.Item>
        <Menu.Item key="4"> 自由行 </Menu.Item>
        <Menu.Item key="5"> 私家团 </Menu.Item>
        <Menu.Item key="6"> 邮轮 </Menu.Item>
        <Menu.Item key="7"> 酒店+景点 </Menu.Item>
        <Menu.Item key="8"> 当地玩乐 </Menu.Item>
        <Menu.Item key="9"> 主题游 </Menu.Item>
        <Menu.Item key="10"> 定制游 </Menu.Item>
        <Menu.Item key="11"> 游学 </Menu.Item>
        <Menu.Item key="12"> 签证 </Menu.Item>
        <Menu.Item key="13"> 企业游 </Menu.Item>
        <Menu.Item key="14"> 高端游 </Menu.Item>
        <Menu.Item key="15"> 爱玩户外 </Menu.Item>
        <Menu.Item key="16"> 保险 </Menu.Item>
      </Menu> */}
    </div>
  );
};
