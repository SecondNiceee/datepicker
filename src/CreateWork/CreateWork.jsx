import styles from "./CreateWork.module.css";

const CreateWork = ({ text = "Название задания" }) => {
      return (
        <div className={styles.createWork1}>
          <img
            className={styles.imgE3d7d8c0d2ea11Icon}
            alt=""
            src="/img-e3d7d8c0d2ea1-1@2x.png"
          />
          <section className={styles.frameParent}>
            <div className={styles.frameWrapper}>
              <div className={styles.parent}>
                <div className={styles.div}>Создайте объявление</div>
                <div className={styles.div1}>
                  <span>{`1 / `}</span>
                  <span className={styles.span}>3</span>
                </div>
              </div>
            </div>
            <div className={styles.customShapeParent}>
              <div className={styles.customShape} />
              <div className={styles.categoryLabelParent}>
                <div className={styles.categoryLabel}>
                  <div className={styles.subcategoryLabel}>
                    <div className={styles.div2}>Категория</div>
                    <div className={styles.webDesign}>
                      <div className={styles.div3}>Дизайн</div>
                      <div className={styles.webDesignInner}>
                        <img
                          className={styles.frameChild}
                          alt=""
                          src="/group-41.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.mainContent} />
              </div>
              <div className={styles.secondaryContent}>
                <div className={styles.requirementListParent}>
                  <div className={styles.requirementList}>
                    <div className={styles.div4}>Подкатегория</div>
                    <div className={styles.div5}>Дизайн сайтов и прил.</div>
                  </div>
                  <div className={styles.websiteTemplate}>
                    <img
                      className={styles.websiteTemplateChild}
                      loading="lazy"
                      alt=""
                      src="/group-41.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.frameGroup}>
            <div className={styles.wrapper}>
              <div className={styles.div6}>{text}</div>
            </div>
            <div className={styles.taskDetailsParent}>
              <div className={styles.taskDetails} />
              <div className={styles.div7}>Что нужно сделать?</div>
            </div>
            <div className={styles.taskExample}>
              <div className={styles.div8}>
                Например, разработать дизайн для сайта
              </div>
            </div>
          </section>
          <section className={styles.requestDesign}>
            <div className={styles.detailedInstructionsParent}>
              <div className={styles.detailedInstructions}>
                <div className={styles.div9}>Описание</div>
              </div>
              <div className={styles.detailedBriefParent}>
                <div className={styles.detailedBrief} />
                <div className={styles.div10}>Дайте подробное тз...</div>
                <div className={styles.emptyFieldHint}>
                  <div className={styles.div11}>0 / 500</div>
                </div>
              </div>
            </div>
            <div className={styles.imagePlaceholderParent}>
              <div className={styles.imagePlaceholder} />
              <img className={styles.vectorIcon} alt="" />
              <input
                className={styles.frameItem}
                placeholder="Добавить фото"
                type="text"
              />
              <img className={styles.frameInner} alt="" src="/group-58.svg" />
            </div>
          </section>
          <section className={styles.frameContainer}>
            <div className={styles.publicAndPrivateParent}>
              <div className={styles.publicAndPrivate} />
              <div className={styles.lockAccess}>
                <div className={styles.div12}>Сделать приватным</div>
              </div>
              <div className={styles.rectangleParent}>
                <div className={styles.rectangleDiv} />
                <div className={styles.frameChild1} />
              </div>
            </div>
            <div className={styles.taskSummary}>
              <div className={styles.div13}>
                Задание увидят только исполнители, а после завершения — только вы и
                выбранный исполнитель.
              </div>
            </div>
          </section>
        </div>
  );
};

export default CreateWork;
