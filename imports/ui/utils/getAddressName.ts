const getAddressName = (address) => 
  address ? (
    (address.nickName ?? '') + ' ' + (address.country ?? '') + ' ' + (address.province ?? '') + ' ' + (address.city ?? '') + ' ' + (address.postalCode ?? '')
  ) : '-'

export default getAddressName
