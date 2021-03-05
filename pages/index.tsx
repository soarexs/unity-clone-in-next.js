import { ChannelsFollowing } from "./components/ChannelsFollowing";
import { ImageBanner } from "./components/Image";
import { LateralMenu } from "./components/LateralMenu";
import { Channels } from "./components/LiveChannels";
import { SearchBar } from "./components/SearchBar";
import styles from './styles/pages/Home.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <LateralMenu />
      </div>
      <div className={styles.bar}>
        <SearchBar />
        <div className={styles.divImg}>
          <ImageBanner />
        </div>
        <div className={styles.containerSpan}>
          <span className={styles.span}>Live channels</span>
          <div className={styles.channelContainer}>
            <Channels />
            <Channels />
            <Channels />
            <Channels />

          </div>
          <ChannelsFollowing />
        </div>
      </div>
    </div>
  )
}
