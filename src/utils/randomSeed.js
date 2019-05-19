const mask = 0xffffffff;

// source: https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
export default function randomSeed(i) {
  let m_w = (123456789 + i) & mask;
  let m_z = (987654321 - i) & mask;
  m_z = (36969 * (m_z & 65535) + (m_z >> 16)) & mask;
  m_w = (18000 * (m_w & 65535) + (m_w >> 16)) & mask;
  let result = ((m_z << 16) + (m_w & 65535)) >>> 0;
  result /= 4294967296;
  return result;
}
