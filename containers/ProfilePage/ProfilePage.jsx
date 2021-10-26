import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './ProfilePage.module.css'

import {Heading} from '../../components/Heading'
import {Button} from '../../components/Button'
import {Card} from '../../components/Card'

export default function ProfilePage() {
  return (
    <main className={styles.profileMain}>
      <div className="row justify-content-center">
        <div
          className="col-xxl-7 col-xl-7 col-lg-8 col-md-8 col-sm-10"
          data-aos="fade-in"
          data-aos-delay={500}
          data-aos-duration={1000}
        >
          <Card width="compact"></Card>
        </div>
        <div
          className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3"
          data-aos="fade-in"
          data-aos-delay={500}
          data-aos-duration={1000}
        >
          <div className={styles.cardButtons}>
            <Card width="other">
              <div className={styles.buttonProfile}>
                <Button href="/assessment" size="compact">
                  Preencher Roda da Trilha
                </Button>
              </div>
              <div className={styles.buttonProfile}>
                <Button size="compact">Complementar Cadastro</Button>
              </div>
              <div className={styles.buttonProfile}>
                <Button size="compact" disabled>
                  Encontrar Mentor(a) Ideal
                </Button>
              </div>
              <div className={styles.buttonProfile}>
                <Button size="compact" disabled>
                  Preencher Lista de Presença
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
