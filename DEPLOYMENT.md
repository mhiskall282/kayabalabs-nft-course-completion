# Kayaba Labs NFT Certificate - Mainnet Deployment Guide

## 📋 Prerequisites Checklist

Before deploying to mainnet, ensure you have:

- [ ] Private key backed up securely
# Get more ETH from bridge or CEX
```

### Issue: Contract verification failed

**Solution:**
```bash
# Wait 2-3 minutes, then manually verify
forge verify-contract $CONTRACT_ADDRESS \
    src/KayabaCourseCompletionNFT.sol:KayabaCourseCompletionNFT \
    --chain-id 534352 \
    --constructor-args $(cast abi-encode "constructor(string,string)" "$METADATA_URI" "$COURSE_PREFIX")
```

### Issue: NFT not showing on OpenSea

**Solution:**
1. Wait 30 minutes minimum
2. Click "Refresh metadata" on OpenSea
3. Verify metadata URL works in browser
4. Check image URL is accessible

### Issue: Transaction pending forever

**Solution:**
```bash
# Check transaction status
cast tx TRANSACTION_HASH --rpc-url $SCROLL_MAINNET_RPC_URL

# If stuck, try increasing gas price on next transaction
```

---

## 📊 Cost Tracking

Keep track of your deployment costs:

| Item | Cost (ETH) | Cost (USD) |
|------|------------|------------|
| Deployment | 0.00XX | $X.XX |
| Test Mint | 0.0003 | $0.XX |
| Verification | 0.00XX | $0.XX |
| **Total** | **0.00XX** | **$X.XX** |

---

## 🎯 Next Steps

After successful deployment:

1. ✅ Update website with contract address
2. ✅ Create minting interface for students
3. ✅ Set up bulk minting workflow
4. ✅ Configure payment processing (Stripe)
5. ✅ Test end-to-end student flow
6. ✅ Prepare marketing materials
7. ✅ Launch to first cohort

See `OPERATIONS.md` for ongoing management instructions.

---

## 📞 Support

If you encounter issues:

1. Check transaction on block explorer
2. Verify RPC endpoint is working
3. Ensure sufficient ETH for gas
4. Review Foundry documentation: https://book.getfoundry.sh/
5. Check network status pages

---

**Congratulations on deploying to mainnet! 🎉**