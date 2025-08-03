"use client";

import styles from "./Coins.module.scss";
import React, { useEffect, useState } from "react";

import useCoinsDonation from "@/features/coins/model/coins-donation.store";
import { useEditStats } from "@/features/coins/model/hooks/edit-stats.hook";
import { useGetStats } from "@/features/coins/model/hooks/get-stats.hook";

import Button from "@/shared/ui/Button/Button";

export function Coins() {
  const [currientCoins, setCurrientCoins] = useState<string | undefined>("");

  const {
    data,
    mutate: getStats,
    isPending: isGetStatsPending,
  } = useGetStats();
  const { mutate: editStats } = useEditStats();

  const isDonatedOnce = useCoinsDonation((state) => state.isDonatedOnce);
  const setIsDonatedOnce = useCoinsDonation((state) => state.setIsDonatedOnce);

  useEffect(() => {
    getStats();
  }, []);

  useEffect(() => {
    if (data?.coins) {
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
