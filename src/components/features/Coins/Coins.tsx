"use client";

import React, { useEffect, useState } from "react";

import Button from "@/components/ui/Button/Button";

import styles from "./Coins.module.scss";
import { useEditStats } from "@/hooks/stats/edit-stats.hook";
import { useGetStats } from "@/hooks/stats/get-stats.hook";
import useCoinsDonation from "@/stores/stats/coins-donation.store";
import { Tooltip } from "antd";

export default function Coins() {
  const [currientCoins, setCurrientCoins] = useState<string | undefined>("");

  const { data, mutate: getStats, isPending: isGetStatsPending } = useGetStats();
  const { mutate: editStats } = useEditStats();

  const isDonatedOnce = useCoinsDonation((state) => state.isDonatedOnce);
  const setIsDonatedOnce = useCoinsDonation((state) => state.setIsDonatedOnce);

  useEffect(() => {
    getStats();
  }, []);

  useEffect(() => {
    if (data) {
      setCurrientCoins(data.coins);
    }
  }, [isGetStatsPending]);

  function handleAddCoinButtonClick() {
    if (data?.coins && !isDonatedOnce) {
      editStats({
        coins: `${Number(data.coins) + 1}`,
      });
      setCurrientCoins(`${Number(data.coins) + 1}`);
      setIsDonatedOnce(true);
    }
  }

  return (
    <div className={styles.root}>
      <Tooltip
        placement="right"
        title={
          isDonatedOnce ? (
            <div>
              Вы можете подарить только{" "}
              <span className={styles.spannedTooltipText}>1</span> монетку
            </div>
          ) : null
        }
        color="var(--dark)"
        classNames={{
          root: styles.tooltipRoot,
          body: styles.tooltipBody,
        }}
      >
        <div>
          <Button
            onClick={handleAddCoinButtonClick}
            className={styles.plusButton}
            shape="square"
            animation="filling"
          >
            +
          </Button>
        </div>
      </Tooltip>

      <div className={styles.text}>
        <span className={styles.coins}>{currientCoins}</span>
        <div className={styles.description}>монет заработано</div>
      </div>
    </div>
  );
}
