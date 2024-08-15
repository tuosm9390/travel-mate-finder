// pages/index.js
import { useState } from 'react';
import styles from '@/styles/Home.module.css'; // CSS 모듈 임포트

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    travelStyle: '',
    budget: '',
    travelLocation: '',
    travelTime: '',
    gender: '',
    interests: '',
    contact: ''
  });

  const [mates, setMates] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMates([...mates, formData]);
    setFormData({
      name: '',
      travelStyle: '',
      budget: '',
      travelLocation: '',
      travelTime: '',
      gender: '',
      interests: '',
      contact: ''
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>여행 메이트 찾기</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          className={styles.input} // 클래스 추가
          placeholder="이름"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="travelStyle"
          className={styles.input} // 클래스 추가
          placeholder="여행 스타일"
          value={formData.travelStyle}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="budget"
          className={styles.input} // 클래스 추가
          placeholder="예산 범위"
          value={formData.budget}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="travelLocation"
          className={styles.input} // 클래스 추가
          placeholder="여행 지역"
          value={formData.travelLocation}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="travelTime"
          className={styles.input} // 클래스 추가
          placeholder="여행 시간"
          value={formData.travelTime}
          onChange={handleChange}
          required
        />
        <select name="gender" className={styles.select} value={formData.gender} onChange={handleChange} required>
          <option value="">성별 선택</option>
          <option value="male">남성</option>
          <option value="female">여성</option>
        </select>
        <input
          type="text"
          name="interests"
          className={styles.input} // 클래스 추가
          placeholder="관심 활동"
          value={formData.interests}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contact"
          className={styles.input} // 클래스 추가
          placeholder="연락처 (이메일 등)"
          value={formData.contact}
          onChange={handleChange}
          required
        />
        <button type="submit" className={styles.button}>메이트 모집하기</button> {/* 클래스 추가 */}
      </form>

      <h2>모집된 여행 메이트</h2>
      <ul className={styles.mateList}>
        {mates.map((mate, index) => (
          <li key={index} className={styles.mateItem}>
            <strong>{mate.name}</strong> - {mate.travelStyle}, 예산: {mate.budget}, 지역: {mate.travelLocation}, 시간: {mate.travelTime}, 성별: {mate.gender}, 관심: {mate.interests}, 연락처: {mate.contact}
          </li>
        ))}
      </ul>
    </div>
  );
}
