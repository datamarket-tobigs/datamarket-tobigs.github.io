import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TopBarContainer, TopBarLeft, TopBarItem } from './style';

const TopBarItems = [
  {
    name: '소개',
    route: '/',
  },
  {
    name: '커리큘럼&활동',
    route: '/curriculum',
  },
  {
    name: '모집 안내',
    route: '/recruit',
  },
  {
    name: 'FAQ',
    route: '/faq',
  },
];

const TopBar = ({ active }) => {
  const [selectedItem, setSelectedItem] = useState(window.location.pathname);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    if( path === '/') {
      setSelectedItem('/');
    } else if (path === '/curriculum/' || path === '/curriculum') {
      setSelectedItem('/curriculum');
    } else if (path === '/recruit/' || path === '/recruit') {
      setSelectedItem('/recruit');
    } else if (path === '/faq/' || path === '/faq') {
      setSelectedItem('/faq');
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  const navigate = useNavigate();
  function goRoute(route) {
    window.scrollTo(0, 0);
    if (route === selectedItem) return;
    navigate(route);
  };

  return (
    <TopBarContainer isScroll={isScroll} home={selectedItem === '/'} >
      <TopBarLeft>
        {TopBarItems.map((item, index) => (
          <TopBarItem
            key={index}
            selected={selectedItem === item.route}
            onClick={() => goRoute(item.route)}
          >
            {item.name}
          </TopBarItem>
        ))}
      </TopBarLeft>
      { /*
      <TopBarButton
        active={active}
        onClick={() => alert('준비중입니다.')}
      >
        지원하기
      </TopBarButton>
      */ }
    </TopBarContainer>
  );
}

export default TopBar;
