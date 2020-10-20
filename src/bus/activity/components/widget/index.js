import React from 'react';
import cx from 'classnames';

import Styles from './styles/index.module.scss';

import { useWidget } from './hooks/useWidget';

export const Widget = () => {
    const {widgetDataAll} = useWidget();
    return (
        <div className={Styles.widget}>
            <span className={Styles.title}>Life Score</span>
            <div className={Styles.module}>
                <span className={Styles.score} style={{bottom: `${widgetDataAll}%`}}>{widgetDataAll}</span>
                <div className={Styles.progress}>
                    <div className={Styles.fill} style={{height: `${widgetDataAll}%`}}></div>
                </div>
                <span className={cx([Styles.label, Styles.level1])}>Off Track</span>
                <span className={cx([Styles.label, Styles.level2])}>Imbalanced</span>
                <span className={cx([Styles.label, Styles.level3])}>Balanced</span>
                <span className={cx([Styles.label, Styles.level4])}>Healthy</span>
                <span className={cx([Styles.label, Styles.level5])}>Perfect Fit</span>
            </div>
        </div>
    )
}