import React from 'react';
import { Button } from '@alifd/next';
import styles from './index.module.scss';

export default function LandingIntroBanner() {
  return (
    <div className={styles.landingIntroBanner} style={{ height: '100vh' }}>
      <div
        className={styles.landingIntroBannerBackground}
        style={{
          backgroundImage:
            `url(${require('./images/TB1cWGdnXGWBuNjy0FbXXb4sXXa-1900-898.png')})`,
          backgroundPosition: 'center',
        }}
      />
      <div className={styles.landingIntroBannerContentWrapper}>
        <div className={styles.landingIntroBannerContent}>
          <h2 className={styles.title}>Abser</h2>
          <p className={styles.subTitle}>
            热爱自由的程序员
          </p>
          <div
            className={styles.landingIntroBannerButtons}
            style={{ textAlign: 'center', marginTop: 70 }}
          >
            <a href="//yuque.com/abser" target="_blank" rel="noopener noreferrer" className={styles.leftButton}>
              <Button
                style={{
                  height: 50,
                  padding: '0 58px',
                  fontSize: 16,
                  marginBottom: '20px',
                }}
                size="large"
                type="normal"
              >
                我的博客
              </Button>
            </a>
            <a href="//www.yuque.com/abser/in/zg8nf9" target="_blank" rel="noopener noreferrer">
              <Button
                style={{
                  height: 50,
                  padding: '0 58px',
                  fontSize: 16,
                  marginBottom: '20px',
                }}
                type="primary"
                size="large"
              >
                关于我
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
