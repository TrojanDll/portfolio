"use client";

import { CoinsPlusButton } from "../CoinsPlusButton/CoinsPlusButton";
import styles from "./Coins.module.scss";
import React, { useEffect, useState } from "react";

import useCoinsDonation from "@/features/coins/model/coins-donation.store";
import { useEditStats } from "@/features/coins/model/hooks/edit-stats.hook";
import { useGetStats } from "@/features/coins/model/hooks/get-stats.hook";

import Button from "@/shared/ui/Button/Button";
import { CustomTooltip } from "@/shared/ui/CustomTooltip/CustomTooltip";

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
      <CoinsPlusButton
        isTooltipDisabled={!isDonatedOnce}
        onClick={handleAddCoinButtonClick}
      />

      <div className={styles.text}>
        <span className={styles.coins}>{currientCoins}</span>
        <div className={styles.description}>монет заработано</div>
      </div>
    </div>
  );
}
